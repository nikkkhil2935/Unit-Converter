import type { APIRoute } from 'astro';
import { parseSearchQuery, convert, getCategory, categories } from '../../lib/conversions';

export const prerender = false; // Set to false to force serverless runtime for this endpoint

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify({ error: 'Missing query parameter "q"' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 1. Try local NLP parsing first (covers 95%+ of queries instantly)
  const localMatch = parseSearchQuery(query);
  if (localMatch) {
    return new Response(JSON.stringify({
      source: 'local',
      success: true,
      value: localMatch.value,
      fromUnit: localMatch.fromUnit,
      toUnit: localMatch.toUnit,
      category: localMatch.category,
      result: localMatch.result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // 2. Fallback to Claude API if configured
  const apiKey = import.meta.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Query not parsed locally, and AI service is not configured (missing ANTHROPIC_API_KEY).'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Construct the unit list prompt for Claude
    const schemaList = categories.map(cat => ({
      category: cat.id,
      units: cat.units.map(u => ({ id: u.id, name: u.name, symbol: u.symbol }))
    }));

    const prompt = `You are a strict JSON parser for a unit converter app.
Analyze the user's natural language query and map it to a specific conversion.

User query: "${query}"

Here are the supported categories and units in our system:
${JSON.stringify(schemaList, null, 2)}

Your output must be a valid JSON object matching the schema below.
If you cannot parse or map the units successfully, set "success" to false.
Do NOT output any markdown tags (like \`\`\`json), comments, or introductory text. Output ONLY the raw JSON string:

{
  "success": true or false,
  "value": number,
  "fromUnit": "the exact unit ID from our list",
  "toUnit": "the exact unit ID from our list",
  "categoryId": "the exact category ID from our list"
}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 150,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({
        success: false,
        error: `AI service returned error status: ${response.status}`,
        details: errText
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const textContent = data.content?.[0]?.text?.trim() || '';
    
    // Parse the Claude response safely
    let aiParsed;
    try {
      aiParsed = JSON.parse(textContent);
    } catch (e) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to parse AI response as JSON',
        raw: textContent
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!aiParsed || !aiParsed.success) {
      return new Response(JSON.stringify({
        success: false,
        error: 'AI could not map the query to a valid conversion'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Map AI unit IDs back to our objects and calculate
    const category = getCategory(aiParsed.categoryId);
    const fromUnit = category?.units.find(u => u.id === aiParsed.fromUnit);
    const toUnit = category?.units.find(u => u.id === aiParsed.toUnit);

    if (!category || !fromUnit || !toUnit) {
      return new Response(JSON.stringify({
        success: false,
        error: 'AI returned unit IDs that are not present in our database'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = convert(aiParsed.value, fromUnit.id, toUnit.id, category.id);

    return new Response(JSON.stringify({
      source: 'ai-claude',
      success: true,
      value: aiParsed.value,
      fromUnit,
      toUnit,
      category,
      result
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({
      success: false,
      error: 'An internal error occurred while calling the AI service',
      message: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
