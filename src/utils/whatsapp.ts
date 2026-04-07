import { Product } from "@/data/products";

const PHONE_NUMBER = "201011809211";

// 🔹 طلب منتج واحد
export function openWhatsAppSingle(product: Product) {
  const message = `مرحباً 👋
أرغب في طلب المنتج التالي:

🛍️ المنتج: ${product.name}
💰 السعر: ${product.price} جنيه

هل متاح حالياً؟`;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// 🔹 طلب من السلة
export function openWhatsAppCart(
  items: { product: Product; quantity: number }[]
) {
  if (!items.length) return;

  const productLines = items
    .map(
      (item, i) =>
        `${i + 1}- ${item.product.name} (الكمية: ${
          item.quantity
        }) - ${item.product.price * item.quantity} جنيه`
    )
    .join("\n");

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const message = `مرحباً 👋
أرغب في طلب المنتجات التالية:

${productLines}

💵 الإجمالي: ${total} جنيه

يرجى تأكيد التوفر وموعد التوصيل 🚚`;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}