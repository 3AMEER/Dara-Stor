import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { openWhatsAppCart } from "@/utils/whatsapp";

interface MobileBottomBarProps {
  onCartOpen: () => void;
}

export default function MobileBottomBar({ onCartOpen }: MobileBottomBarProps) {
  const { items, totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden animate-slide-up">
      <div className="bg-card/95 backdrop-blur-lg border-t border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={onCartOpen}
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-2.5 rounded-xl"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm font-bold">{totalItems}</span>
        </button>
        <button
          onClick={() => openWhatsAppCart(items)}
          className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="h-4 w-4" />
          إتمام الطلب ({totalPrice} جنيه)
        </button>
      </div>
    </div>
  );
}
