import { Heart, Plus, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { openWhatsAppSingle } from "@/utils/whatsapp";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, open, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!product) return null;
  const fav = isFavorite(product.id);

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl">
        <div className="relative">
          <img
            src={product.image}
            alt=""
            className="w-full aspect-square object-cover"
          />
          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-3 left-12 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-pressed={fav}
            aria-label={fav ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
          >
            <Heart className={`h-5 w-5 ${fav ? "fill-primary text-primary" : "text-muted-foreground"}`} aria-hidden />
          </button>
          {product.oldPrice && (
            <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full pointer-events-none">
              خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          )}
        </div>

        <div className="p-5 space-y-4">
          <DialogTitle className="text-xl font-bold text-card-foreground leading-snug text-start">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed text-start">
            {product.description}
          </DialogDescription>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-foreground">{product.price} جنيه</span>
            {product.oldPrice && (
              <span className="text-base text-muted-foreground line-through">{product.oldPrice} جنيه</span>
            )}
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => openWhatsAppSingle(product)}
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-medium py-3 rounded-xl hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              اطلب الآن عبر واتساب
            </button>
            <button
              type="button"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="px-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-accent transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Plus className="h-5 w-5" aria-hidden />
              السلة
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
