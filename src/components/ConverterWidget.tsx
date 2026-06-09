import React, { useState, useEffect, useRef } from "react";
import { categories, convert, getFormulaExplanation, type Category, type Unit } from "../lib/conversions";
import { translations, type LanguageCode } from "../lib/translations";
import CategoryIcon from "./CategoryIcon";

const isValidNumberInput = (val: string): boolean => {
  return val === "" || /^[+-]?\d*\.?\d*(?:[eE][+-]?\d*)?$/.test(val);
};

interface Props {
  initialCategory?: string;
  initialFrom?: string;
  initialTo?: string;
  initialValue?: number;
}

export default function ConverterWidget({
  initialCategory = "length",
  initialFrom,
  initialTo,
  initialValue
}: Props) {
  const [lang, setLang] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as LanguageCode || "en";
    setLang(savedLang);

    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as LanguageCode;
      if (detail) setLang(detail);
    };

    window.addEventListener("lang-change", handleLangChange);
    return () => window.removeEventListener("lang-change", handleLangChange);
  }, []);

  const t = translations[lang] || translations.en;

  // 1. Core State
  const [activeCategory, setActiveCategory] = useState<Category>(() => {
    return categories.find(c => c.id === initialCategory) || categories[0];
  });
  
  const [fromUnit, setFromUnit] = useState<Unit>(() => {
    if (initialFrom) {
      const unit = activeCategory.units.find(u => u.id === initialFrom || u.symbol.toLowerCase() === initialFrom.toLowerCase());
      if (unit) return unit;
    }
    return activeCategory.units[0];
  });

  const [toUnit, setToUnit] = useState<Unit>(() => {
    if (initialTo) {
      const unit = activeCategory.units.find(u => u.id === initialTo || u.symbol.toLowerCase() === initialTo.toLowerCase());
      if (unit) return unit;
    }
    return activeCategory.units[1] || activeCategory.units[0];
  });

  const [fromValue, setFromValue] = useState<string>(() => {
    if (initialValue !== undefined) return initialValue.toString();
    return "1";
  });

  const [toValue, setToValue] = useState<string>("");
  const [lastEdited, setLastEdited] = useState<"from" | "to">("from");

  // 2. UX & History State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [history, setHistory] = useState<{ id: string; categoryId: string; fromId: string; toId: string; fromName: string; toName: string; fromVal: number; toVal: number; timestamp: number }[]>([]);
  const [favorites, setFavorites] = useState<{ categoryId: string; fromId: string; toId: string; fromName: string; toName: string }[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  // 3. Refs for inputs
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state for category list
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth"
      });
    }
  };

  // Scroll active category button into view when activeCategory changes
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.querySelector('[data-active="true"]');
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeCategory]);

  // 4. Synchronization and URL State
  useEffect(() => {
    // Read history and favorites from LocalStorage on mount
    try {
      const savedHistory = localStorage.getItem("converter_history");
      if (savedHistory) setHistory(JSON.parse(savedHistory));

      const savedFavorites = localStorage.getItem("converter_favorites");
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    } catch (e) {
      console.error("Failed to read from localStorage", e);
    }
  }, []);

  // Recalculate conversion when inputs change
  useEffect(() => {
    const fromNum = parseFloat(fromValue);
    if (isNaN(fromNum)) {
      setToValue("");
      return;
    }

    if (lastEdited === "from") {
      const result = convert(fromNum, fromUnit.id, toUnit.id, activeCategory.id);
      if (isNaN(result)) {
        setToValue("");
      } else {
        setToValue(formatResult(result));
      }
    } else {
      const toNum = parseFloat(toValue);
      if (isNaN(toNum)) {
        setFromValue("");
        return;
      }
      const result = convert(toNum, toUnit.id, fromUnit.id, activeCategory.id);
      if (isNaN(result)) {
        setFromValue("");
      } else {
        setFromValue(formatResult(result));
      }
    }
  }, [fromValue, toValue, fromUnit, toUnit, activeCategory, lastEdited]);

  // Sync favorites check
  useEffect(() => {
    const favorited = favorites.some(
      fav =>
        fav.categoryId === activeCategory.id &&
        fav.fromId === fromUnit.id &&
        fav.toId === toUnit.id
    );
    setIsFavorite(favorited);
  }, [favorites, activeCategory, fromUnit, toUnit]);

  // Update URL state dynamically (only the query parameter v=...)
  useEffect(() => {
    const valueStr = lastEdited === "from" ? fromValue : toValue;
    const valueNum = parseFloat(valueStr);
    if (!isNaN(valueNum)) {
      const url = new URL(window.location.href);
      url.searchParams.set("v", valueNum.toString());
      window.history.replaceState({}, "", url.toString());
    }
  }, [fromValue, toValue, lastEdited]);

  // 5. Helper function to format result nicely without huge floating point errors
  const formatResult = (val: number): string => {
    if (val === 0) return "0";
    const absVal = Math.abs(val);
    if (absVal < 1e-6 || absVal > 1e12) {
      return val.toExponential(6);
    }
    // Limit to 9 decimal places and remove trailing zeroes
    return Number(val.toFixed(9)).toString();
  };

  // 6. Actions
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    const primaryUnit = category.units[0];
    const secondaryUnit = category.units[1] || category.units[0];
    setFromUnit(primaryUnit);
    setToUnit(secondaryUnit);
    setFromValue("1");
    setLastEdited("from");
  };

  const handleSwap = () => {
    const prevFromUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(prevFromUnit);
    
    // We swap the values based on who was last edited
    if (lastEdited === "from") {
      setFromValue(toValue);
      setLastEdited("to"); // shift edit target
    } else {
      setToValue(fromValue);
      setLastEdited("from");
    }
    showToast(t.swapped);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      showToast(t.copied.replace('{val}', text));
      
      // Save to recent conversions history
      const fromValNum = parseFloat(fromValue);
      const toValNum = parseFloat(toValue);
      if (!isNaN(fromValNum) && !isNaN(toValNum)) {
        addHistoryItem(fromValNum, toValNum);
      }
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };

  const addHistoryItem = (fromVal: number, toVal: number) => {
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      categoryId: activeCategory.id,
      fromId: fromUnit.id,
      toId: toUnit.id,
      fromName: fromUnit.name,
      toName: toUnit.name,
      fromVal,
      toVal,
      timestamp: Date.now()
    };

    setHistory(prev => {
      // Avoid duplicate consecutive entries of same conversion
      if (prev.length > 0 && 
          prev[0].fromId === newItem.fromId && 
          prev[0].toId === newItem.toId && 
          prev[0].fromVal === newItem.fromVal) {
        return prev;
      }
      const updated = [newItem, ...prev.slice(0, 9)];
      localStorage.setItem("converter_history", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleFavorite = () => {
    setFavorites(prev => {
      let updated;
      if (isFavorite) {
        updated = prev.filter(
          fav =>
            !(
              fav.categoryId === activeCategory.id &&
              fav.fromId === fromUnit.id &&
              fav.toId === toUnit.id
            )
        );
        showToast(lang === 'hi' ? 'पसंदीदा से हटाया गया' : lang === 'es' ? 'Eliminado de favoritos' : lang === 'fr' ? 'Retiré des favoris' : 'Removed from favorites');
      } else {
        const newFav = {
          categoryId: activeCategory.id,
          fromId: fromUnit.id,
          toId: toUnit.id,
          fromName: fromUnit.name,
          toName: toUnit.name
        };
        updated = [newFav, ...prev];
        showToast(lang === 'hi' ? 'पसंदीदा में जोड़ा गया' : lang === 'es' ? 'Añadido a favoritos' : lang === 'fr' ? 'Ajouté aux favoris' : 'Added to favorites');
      }
      localStorage.setItem("converter_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const loadFavorite = (fav: typeof favorites[0]) => {
    const category = categories.find(c => c.id === fav.categoryId);
    if (!category) return;
    setActiveCategory(category);
    
    const fUnit = category.units.find(u => u.id === fav.fromId);
    const tUnit = category.units.find(u => u.id === fav.toId);
    
    if (fUnit && tUnit) {
      setFromUnit(fUnit);
      setToUnit(tUnit);
      setFromValue("1");
      setLastEdited("from");
      showToast(t.loaded.replace('{from}', fUnit.name).replace('{to}', tUnit.name));
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("converter_history");
    showToast(lang === 'hi' ? 'इतिहास साफ किया गया' : lang === 'es' ? 'Historial borrado' : lang === 'fr' ? 'Historique effacé' : 'History cleared');
  };

  // 7. Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in standard inputs, unless it's a specific command key combo
      const target = e.target as HTMLElement;
      const isInput = target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA";

      if (isInput) {
        // We still support Escape to blur
        if (e.key === "Escape") {
          target.blur();
        }
        return;
      }

      // S key -> Swap Units
      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleSwap();
      }

      // C key -> Copy Result
      if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        const resVal = lastEdited === "from" ? toValue : fromValue;
        copyToClipboard(resVal);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fromUnit, toUnit, fromValue, toValue, lastEdited, activeCategory]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Category selector row container */}
      <div className="relative group/scroll flex items-center">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => scrollCategories("left")}
          className="absolute left-0 z-10 w-7 h-7 rounded-full border border-hairline bg-card/95 hover:bg-canvas hover:border-brand-blue text-ink shadow-sm flex items-center justify-center cursor-pointer opacity-0 group-hover/scroll:opacity-100 focus:opacity-100 transition-opacity duration-200"
          title="Scroll Left"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Scrollable Categories List */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex-1 flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin border-b border-hairline gap-2 scroll-smooth select-none cursor-grab active:cursor-grabbing"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              data-active={activeCategory.id === cat.id ? "true" : "false"}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory.id === cat.id
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-body-text hover:text-ink hover:bg-canvas"
              }`}
            >
              <CategoryIcon id={cat.id} className="w-3.5 h-3.5 mr-1.5 inline-block align-text-bottom" />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => scrollCategories("right")}
          className="absolute right-0 z-10 w-7 h-7 rounded-full border border-hairline bg-card/95 hover:bg-canvas hover:border-brand-blue text-ink shadow-sm flex items-center justify-center cursor-pointer opacity-0 group-hover/scroll:opacity-100 focus:opacity-100 transition-opacity duration-200"
          title="Scroll Right"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full min-w-0">
        {/* Converter Card */}
        <div className="lg:col-span-2 min-w-0 bg-card border border-hairline rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold tracking-tight text-ink flex items-center gap-1.5">
              <CategoryIcon id={activeCategory.id} className="w-4 h-4 text-brand-blue" />
              <span>{activeCategory.name} {t.converter}</span>
            </h2>
            
            <button
              onClick={toggleFavorite}
              className={`w-7 h-7 rounded-md border border-hairline flex items-center justify-center cursor-pointer transition-colors ${
                isFavorite 
                  ? "bg-amber-500/10 text-amber-500 border-amber-500/30" 
                  : "text-muted-text hover:text-ink bg-card"
              }`}
              title={isFavorite ? (lang === 'hi' ? 'पसंदीदा से हटाएं' : lang === 'es' ? 'Eliminar de favoritos' : lang === 'fr' ? 'Retirer des favoris' : 'Remove from favorites') : (lang === 'hi' ? 'पसंदीदा में जोड़ें' : lang === 'es' ? 'Añadir a favoritos' : lang === 'fr' ? 'Épingler aux favoris' : 'Pin as favorite')}
            >
              <svg className={`w-3.5 h-3.5 ${isFavorite ? "fill-current" : "fill-none"}`} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-4 relative">
            {/* Input From */}
            <div className="w-full md:flex-1 flex flex-col gap-1.5 min-w-0">
              <label className="text-xs font-medium text-muted-text">{t.from}</label>
              <div className="relative flex border border-hairline rounded-lg bg-canvas focus-within:ring-2 focus-within:ring-brand-blue/30 focus-within:border-brand-blue transition-all">
                <input
                  ref={fromInputRef}
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.-]*"
                  value={fromValue}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (isValidNumberInput(val)) {
                      setFromValue(val);
                      setLastEdited("from");
                    }
                  }}
                  placeholder="0"
                  className="flex-1 min-w-0 bg-transparent border-0 px-3 py-2.5 text-base font-mono text-ink focus:outline-none"
                />
                <select
                  value={fromUnit.id}
                  onChange={(e) => {
                    const unit = activeCategory.units.find(u => u.id === e.target.value);
                    if (unit) setFromUnit(unit);
                  }}
                  className="bg-transparent border-0 border-l border-hairline px-3 text-xs font-medium text-body-text focus:outline-none cursor-pointer pr-8 max-w-[130px] sm:max-w-[200px] truncate"
                >
                  {activeCategory.units.map(unit => (
                    <option key={unit.id} value={unit.id} className="bg-card">
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="pt-5">
              <button
                onClick={handleSwap}
                className="w-10 h-10 rounded-full border border-hairline bg-card hover:bg-canvas hover:border-brand-blue text-body-text hover:text-brand-blue flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                title="Swap units (Shortcut: S)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </button>
            </div>

            {/* Input To */}
            <div className="w-full md:flex-1 flex flex-col gap-1.5 min-w-0">
              <label className="text-xs font-medium text-muted-text">{t.to}</label>
              <div className="relative flex border border-hairline rounded-lg bg-canvas focus-within:ring-2 focus-within:ring-brand-blue/30 focus-within:border-brand-blue transition-all">
                <input
                  ref={toInputRef}
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.-]*"
                  value={toValue}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (isValidNumberInput(val)) {
                      setToValue(val);
                      setLastEdited("to");
                    }
                  }}
                  placeholder="0"
                  className="flex-1 min-w-0 bg-transparent border-0 px-3 py-2.5 text-base font-mono text-ink focus:outline-none"
                />
                <select
                  value={toUnit.id}
                  onChange={(e) => {
                    const unit = activeCategory.units.find(u => u.id === e.target.value);
                    if (unit) setToUnit(unit);
                  }}
                  className="bg-transparent border-0 border-l border-hairline px-3 text-xs font-medium text-body-text focus:outline-none cursor-pointer pr-8 max-w-[130px] sm:max-w-[200px] truncate"
                >
                  {activeCategory.units.map(unit => (
                    <option key={unit.id} value={unit.id} className="bg-card">
                      {unit.name} ({unit.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between mt-6 pt-6 border-t border-hairline gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-text">
              <span className="px-1.5 py-0.5 border border-hairline bg-canvas rounded text-[10px] font-mono">Tab</span> Switch fields
              <span className="px-1.5 py-0.5 border border-hairline bg-canvas rounded text-[10px] font-mono">S</span> Swap
              <span className="px-1.5 py-0.5 border border-hairline bg-canvas rounded text-[10px] font-mono">C</span> Copy
            </div>

            <button
              onClick={() => {
                const resVal = lastEdited === "from" ? toValue : fromValue;
                copyToClipboard(resVal);
              }}
              disabled={!toValue && !fromValue}
              className="px-4 py-2 bg-brand-ink text-white dark:bg-white dark:text-black hover:opacity-90 disabled:opacity-50 text-xs font-medium rounded-md cursor-pointer transition-opacity flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {t.copyBtn}
            </button>
          </div>

          {/* Formula Card */}
          <div className="mt-6 p-4 bg-canvas border border-hairline rounded-lg">
            <h3 className="text-xs font-semibold text-ink mb-1.5 uppercase tracking-wider">{t.formula}</h3>
            <p className="font-mono text-sm font-medium text-brand-blue tracking-tight">
              {getFormulaExplanation(fromUnit.id, toUnit.id, activeCategory.id)}
            </p>
            <p className="text-xs text-muted-text mt-1.5 leading-normal">
              {t.formulaDesc.replace('{from}', fromUnit.name).replace('{to}', toUnit.name)}
            </p>
          </div>
        </div>

        {/* Sidebar (Favorites & History) */}
        <div className="flex flex-col gap-6">
          {/* Favorites Card */}
          <div className="bg-card border border-hairline rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <h3 className="text-sm font-semibold tracking-tight text-ink mb-3 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <span>{t.favorites}</span>
            </h3>
            {favorites.length === 0 ? (
              <p className="text-xs text-muted-text italic">{t.favoritesEmpty}</p>
            ) : (
              <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
                {favorites.map((fav, index) => (
                  <button
                    key={index}
                    onClick={() => loadFavorite(fav)}
                    className="w-full text-left px-3 py-2 border border-hairline bg-canvas hover:border-brand-blue rounded-md text-xs font-medium text-body-text hover:text-brand-blue transition-colors flex justify-between items-center cursor-pointer"
                  >
                    <span>{fav.fromName} → {fav.toName}</span>
                    <span className="text-[10px] text-muted-text font-mono uppercase bg-card border border-hairline px-1 rounded">{fav.categoryId}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Recent History Card */}
          <div className="bg-card border border-hairline rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold tracking-tight text-ink flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>{t.history}</span>
              </h3>
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-[10px] text-muted-text hover:text-error hover:underline bg-transparent border-0 cursor-pointer"
                >
                  {t.historyClear}
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <p className="text-xs text-muted-text italic">{t.historyEmpty}</p>
            ) : (
              <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto pr-1">
                {history.map(item => (
                  <div
                    key={item.id}
                    className="p-2 border border-hairline bg-canvas rounded-md text-xs"
                  >
                    <div className="flex justify-between items-center text-muted-text text-[10px] mb-1">
                      <span>{item.fromName} {lang === 'hi' ? 'से' : lang === 'es' ? 'a' : lang === 'fr' ? 'vers' : 'to'} {item.toName}</span>
                      <span>{new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</span>
                    </div>
                    <div className="font-mono font-medium text-ink flex items-center justify-between">
                      <span className="truncate">{formatResult(item.fromVal)} {item.fromId.substring(0, 3)}</span>
                      <span className="text-muted-text text-[10px] mx-1">→</span>
                      <span className="truncate text-brand-blue">{formatResult(item.toVal)} {item.toId.substring(0, 3)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-ink text-white dark:bg-white dark:text-black border border-hairline px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-200 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
