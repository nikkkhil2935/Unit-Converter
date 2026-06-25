export interface Ingredient {
  name: string;
  slug: string;
  gramsPerCup: number;
  gramsPerCupPacked?: number;
  gramsPerTbsp: number;
  category: string;
  notes?: string;
}

export const ingredients: Ingredient[] = [
  // Baking - Flours & Starches
  { name: "All-Purpose Flour", slug: "flour", gramsPerCup: 120, gramsPerCupPacked: 150, gramsPerTbsp: 7.5, category: "baking", notes: "Sifted vs. Spooned/Packed" },
  { name: "Bread Flour", slug: "bread-flour", gramsPerCup: 127, gramsPerCupPacked: 155, gramsPerTbsp: 8.0, category: "baking" },
  { name: "Cake Flour", slug: "cake-flour", gramsPerCup: 114, gramsPerCupPacked: 140, gramsPerTbsp: 7.1, category: "baking" },
  { name: "Whole Wheat Flour", slug: "whole-wheat-flour", gramsPerCup: 120, gramsPerCupPacked: 145, gramsPerTbsp: 7.5, category: "baking" },
  { name: "Almond Flour", slug: "almond-flour", gramsPerCup: 96, gramsPerCupPacked: 112, gramsPerTbsp: 6.0, category: "baking" },
  { name: "Coconut Flour", slug: "coconut-flour", gramsPerCup: 90, gramsPerCupPacked: 110, gramsPerTbsp: 5.6, category: "baking" },
  { name: "Cornstarch", slug: "cornstarch", gramsPerCup: 128, gramsPerTbsp: 8.0, category: "baking" },
  { name: "Tapioca Flour", slug: "tapioca-flour", gramsPerCup: 120, gramsPerTbsp: 7.5, category: "baking" },
  { name: "Rye Flour", slug: "rye-flour", gramsPerCup: 102, gramsPerCupPacked: 120, gramsPerTbsp: 6.4, category: "baking" },
  { name: "Self-Rising Flour", slug: "self-rising-flour", gramsPerCup: 113, gramsPerCupPacked: 135, gramsPerTbsp: 7.1, category: "baking" },

  // Grains, Oats & Pasta
  { name: "Rolled Oats", slug: "oats", gramsPerCup: 90, gramsPerTbsp: 5.6, category: "grains" },
  { name: "White Rice (Uncooked)", slug: "rice", gramsPerCup: 185, gramsPerTbsp: 11.5, category: "grains" },
  { name: "Brown Rice (Uncooked)", slug: "brown-rice", gramsPerCup: 190, gramsPerTbsp: 11.9, category: "grains" },
  { name: "Quinoa (Uncooked)", slug: "quinoa", gramsPerCup: 170, gramsPerTbsp: 10.6, category: "grains" },
  { name: "Couscous (Uncooked)", slug: "couscous", gramsPerCup: 170, gramsPerTbsp: 10.6, category: "grains" },
  { name: "Cornmeal", slug: "cornmeal", gramsPerCup: 156, gramsPerTbsp: 9.8, category: "grains" },
  { name: "Semolina", slug: "semolina", gramsPerCup: 167, gramsPerTbsp: 10.4, category: "grains" },

  // Sugars & Sweeteners
  { name: "Granulated Sugar", slug: "sugar", gramsPerCup: 200, gramsPerTbsp: 12.5, category: "sweeteners" },
  { name: "Brown Sugar", slug: "brown-sugar", gramsPerCup: 180, gramsPerCupPacked: 220, gramsPerTbsp: 11.3, category: "sweeteners", notes: "Loose vs. Packed" },
  { name: "Powdered Sugar", slug: "powdered-sugar", gramsPerCup: 120, gramsPerCupPacked: 160, gramsPerTbsp: 7.5, category: "sweeteners", notes: "Sifted vs. Packed" },
  { name: "Honey", slug: "honey", gramsPerCup: 340, gramsPerTbsp: 21.3, category: "sweeteners" },
  { name: "Maple Syrup", slug: "maple-syrup", gramsPerCup: 312, gramsPerTbsp: 19.5, category: "sweeteners" },
  { name: "Molasses", slug: "molasses", gramsPerCup: 328, gramsPerTbsp: 20.5, category: "sweeteners" },
  { name: "Corn Syrup", slug: "corn-syrup", gramsPerCup: 328, gramsPerTbsp: 20.5, category: "sweeteners" },
  { name: "Coconut Sugar", slug: "coconut-sugar", gramsPerCup: 192, gramsPerTbsp: 12.0, category: "sweeteners" },

  // Dairy, Fats & Alternatives
  { name: "Butter", slug: "butter", gramsPerCup: 227, gramsPerTbsp: 14.2, category: "dairy-fats", notes: "Equivalent to 2 sticks" },
  { name: "Milk", slug: "milk", gramsPerCup: 245, gramsPerTbsp: 15.3, category: "dairy-fats" },
  { name: "Heavy Cream", slug: "heavy-cream", gramsPerCup: 240, gramsPerTbsp: 15.0, category: "dairy-fats" },
  { name: "Sour Cream", slug: "sour-cream", gramsPerCup: 240, gramsPerTbsp: 15.0, category: "dairy-fats" },
  { name: "Greek Yogurt", slug: "greek-yogurt", gramsPerCup: 245, gramsPerTbsp: 15.3, category: "dairy-fats" },
  { name: "Vegetable Oil", slug: "vegetable-oil", gramsPerCup: 218, gramsPerTbsp: 13.6, category: "dairy-fats" },
  { name: "Olive Oil", slug: "olive-oil", gramsPerCup: 216, gramsPerTbsp: 13.5, category: "dairy-fats" },
  { name: "Coconut Oil (Solid)", slug: "coconut-oil", gramsPerCup: 224, gramsPerTbsp: 14.0, category: "dairy-fats" },
  { name: "Margarine", slug: "margarine", gramsPerCup: 230, gramsPerTbsp: 14.4, category: "dairy-fats" },

  // Powders, Spices & Leavening
  { name: "Cocoa Powder", slug: "cocoa-powder", gramsPerCup: 100, gramsPerCupPacked: 125, gramsPerTbsp: 6.3, category: "powders" },
  { name: "Table Salt", slug: "salt", gramsPerCup: 272, gramsPerTbsp: 17.0, category: "powders" },
  { name: "Kosher Salt (Diamond Crystal)", slug: "kosher-salt-diamond", gramsPerCup: 144, gramsPerTbsp: 9.0, category: "powders" },
  { name: "Kosher Salt (Morton)", slug: "kosher-salt-morton", gramsPerCup: 240, gramsPerTbsp: 15.0, category: "powders" },
  { name: "Baking Powder", slug: "baking-powder", gramsPerCup: 192, gramsPerTbsp: 12.0, category: "powders" },
  { name: "Baking Soda", slug: "baking-soda", gramsPerCup: 288, gramsPerTbsp: 18.0, category: "powders" },
  { name: "Active Dry Yeast", slug: "yeast", gramsPerCup: 224, gramsPerTbsp: 14.0, category: "powders" },

  // Nuts, Seeds & Dried Fruit
  { name: "Chocolate Chips", slug: "chocolate-chips", gramsPerCup: 170, gramsPerTbsp: 10.6, category: "nuts-seeds" },
  { name: "Chopped Walnuts", slug: "walnuts", gramsPerCup: 115, gramsPerTbsp: 7.2, category: "nuts-seeds" },
  { name: "Chopped Pecans", slug: "pecans", gramsPerCup: 110, gramsPerTbsp: 6.9, category: "nuts-seeds" },
  { name: "Sliced Almonds", slug: "almonds-sliced", gramsPerCup: 92, gramsPerTbsp: 5.8, category: "nuts-seeds" },
  { name: "Peanuts", slug: "peanuts", gramsPerCup: 146, gramsPerTbsp: 9.1, category: "nuts-seeds" },
  { name: "Chia Seeds", slug: "chia-seeds", gramsPerCup: 160, gramsPerTbsp: 10.0, category: "nuts-seeds" },
  { name: "Flax Seeds", slug: "flax-seeds", gramsPerCup: 150, gramsPerTbsp: 9.4, category: "nuts-seeds" },
  { name: "Raisins", slug: "raisins", gramsPerCup: 165, gramsPerTbsp: 10.3, category: "nuts-seeds" },
  { name: "Dried Cranberries", slug: "cranberries", gramsPerCup: 135, gramsPerTbsp: 8.4, category: "nuts-seeds" },

  // Liquids & Condiments
  { name: "Water", slug: "water", gramsPerCup: 236.6, gramsPerTbsp: 14.8, category: "liquids" },
  { name: "Soy Sauce", slug: "soy-sauce", gramsPerCup: 250, gramsPerTbsp: 15.6, category: "liquids" },
  { name: "Vinegar", slug: "vinegar", gramsPerCup: 236.6, gramsPerTbsp: 14.8, category: "liquids" },
  { name: "Mayonnaise", slug: "mayonnaise", gramsPerCup: 220, gramsPerTbsp: 13.8, category: "liquids" },
  { name: "Peanut Butter", slug: "peanut-butter", gramsPerCup: 258, gramsPerTbsp: 16.1, category: "liquids" }
];

export function getIngredient(slug: string): Ingredient | undefined {
  return ingredients.find(i => i.slug === slug);
}
