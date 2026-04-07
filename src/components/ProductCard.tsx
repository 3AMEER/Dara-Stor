import { Heart, Plus, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { openWhatsAppSingle } from "@/utils/whatsapp";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(product.id);

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col">
      {/* Image */}
      <div
        className="relative aspect-square bg-secondary cursor-pointer overflow-hidden"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Favorite */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
          className="absolute top-2 left-2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart
            className={`h-4 w-4 transition-all ${fav ? "fill-primary text-primary animate-pop" : "text-muted-foreground"}`}
          />
        </button>
        {product.oldPrice && (
          <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1 gap-2">
        <h3
          className="text-sm font-medium text-card-foreground line-clamp-2 leading-snug cursor-pointer"
          onClick={() => onQuickView(product)}
        >
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-base font-bold text-foreground">{product.price} جنيه</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.oldPrice} جنيه</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-1.5 mt-1">
          <button
            onClick={() => openWhatsAppSingle(product)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-whatsapp text-whatsapp-foreground text-xs font-medium py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">اطلب عبر واتساب</span>
            <span className="sm:hidden">واتساب</span>
          </button>
          <button
            onClick={() => addToCart(product)}
            className="p-2 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
