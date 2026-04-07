import { X, Minus, Plus, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { openWhatsAppCart } from "@/utils/whatsapp";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function CartSheet({ open, onClose }: CartSheetProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    openWhatsAppCart(items);
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-card-foreground">
            <ShoppingCart className="h-5 w-5" />
            سلة التسوق ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingCart className="h-12 w-12 opacity-30" />
            <p className="text-sm">السلة فارغة</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-secondary rounded-xl animate-fade-in"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-card-foreground line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-sm font-bold text-foreground mt-1">
                      {item.product.price * item.quantity} جنيه
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded-lg bg-card hover:bg-accent transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded-lg bg-card hover:bg-accent transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1 h-fit text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex items-center justify-between text-base font-bold text-card-foreground">
                <span>الإجمالي</span>
                <span>{totalPrice} جنيه</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
                إتمام الطلب عبر واتساب
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
