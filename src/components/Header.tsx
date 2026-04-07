import { useState } from "react";
import { Search, Heart, ShoppingCart, X, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Badge } from "@/components/ui/badge";

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

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-14 gap-3">
        {/* Logo */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="font-bold text-lg text-foreground">Dara</span>
        </div>

        {/* Search */}
        <div className={`flex-1 max-w-md transition-all duration-300 ${searchOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto md:overflow-visible"}`}>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحثي عن منتج..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-9 pr-9 pl-3 rounded-full bg-secondary text-sm text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange("")} className="absolute left-3 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Search className="h-5 w-5 text-foreground" />
          </button>
          <button onClick={onFavoritesOpen} className="p-2 rounded-full hover:bg-secondary transition-colors relative">
            <Heart className="h-5 w-5 text-foreground" />
            {favorites.length > 0 && (
              <Badge className="absolute -top-0.5 -left-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-none">
                {favorites.length}
              </Badge>
            )}
          </button>
          <button
            onClick={onCartOpen}
            className="p-2 rounded-full hover:bg-secondary transition-colors relative"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
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
