import { useState } from "react";
import { Search, Heart, ShoppingCart, X, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onCartOpen: () => void;
  onFavoritesOpen: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ onCartOpen, onFavoritesOpen, searchQuery, onSearchChange }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const { favorites } = useFavorites();
  const isMobile = useIsMobile();
  const searchCollapsed = isMobile && !searchOpen;
  const searchFieldTabIndex = searchCollapsed ? -1 : 0;

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-14 gap-3">
        {/* Logo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Sparkles className="h-5 w-5 text-primary" aria-hidden />
          <span className="font-bold text-lg text-foreground">Dara</span>
        </div>

        {/* Search */}
        <div
          id="header-search-region"
          className={`flex-1 max-w-md transition-all duration-300 ${searchOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto md:overflow-visible"}`}
          aria-hidden={searchCollapsed || undefined}
        >
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden />
            <input
              type="search"
              placeholder="ابحثي عن منتج..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              tabIndex={searchFieldTabIndex}
              className="w-full h-9 pr-9 pl-3 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                tabIndex={searchFieldTabIndex}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                aria-label="مسح البحث"
              >
                <X className="h-4 w-4 text-muted-foreground" aria-hidden />
              </button>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            aria-expanded={searchOpen}
            aria-controls="header-search-region"
            aria-label={searchOpen ? "إغلاق البحث" : "فتح البحث"}
          >
            <Search className="h-5 w-5 text-foreground" aria-hidden />
          </button>
          <button
            type="button"
            onClick={onFavoritesOpen}
            className="p-2 rounded-full hover:bg-secondary transition-colors relative"
            aria-label={
              favorites.length > 0
                ? `المفضلة، ${favorites.length} منتج`
                : "المفضلة"
            }
          >
            <Heart className="h-5 w-5 text-foreground" aria-hidden />
            {favorites.length > 0 && (
              <Badge className="absolute -top-0.5 -left-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-none">
                {favorites.length}
              </Badge>
            )}
          </button>
          <button
            type="button"
            onClick={onCartOpen}
            className="p-2 rounded-full hover:bg-secondary transition-colors relative"
            aria-label={
              totalItems > 0
                ? `سلة التسوق، ${totalItems} منتج`
                : "سلة التسوق"
            }
          >
            <ShoppingCart className="h-5 w-5 text-foreground" aria-hidden />
            {totalItems > 0 && (
              <Badge className="absolute -top-0.5 -left-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-none">
                {totalItems}
              </Badge>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
