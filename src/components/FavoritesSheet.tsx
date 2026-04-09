import { Heart, PackageOpen } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { openWhatsAppSingle } from "@/utils/whatsapp";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MessageCircle, Plus, X } from "lucide-react";

interface FavoritesSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function FavoritesSheet({ open, onClose }: FavoritesSheetProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const favProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-card-foreground">
            <Heart className="h-5 w-5 text-primary" />
            المفضلة ({favProducts.length})
          </SheetTitle>
        </SheetHeader>

        {favProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <PackageOpen className="h-12 w-12 opacity-30" />
            <p className="text-sm">لا توجد منتجات في المفضلة</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {favProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 bg-secondary rounded-xl animate-fade-in"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-card-foreground line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-sm font-bold text-foreground mt-1">
                    {product.price} جنيه
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    <button
                      type="button"
                      onClick={() => openWhatsAppSingle(product)}
                      className="flex items-center gap-1 bg-whatsapp text-whatsapp-foreground text-xs font-medium px-2.5 py-1 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <MessageCircle className="h-3 w-3" aria-hidden />
                      واتساب
                    </button>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1 bg-card text-card-foreground text-xs px-2.5 py-1 rounded-lg hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`أضف ${product.name} إلى السلة`}
                    >
                      <Plus className="h-3 w-3" aria-hidden />
                      السلة
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite(product.id)}
                  className="p-1 h-fit text-primary hover:text-destructive transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`إزالة ${product.name} من المفضلة`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
