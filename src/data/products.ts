export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: "skincare" | "makeup" | "accessories";
  image: string;
  description: string;
}

import img1 from '../../src/img/Product1.jpeg'

export const products: Product[] = [
  {
    id: "1",
    name: "سلسله شمس روبانزل بينك",
    price: 100,
    oldPrice: 180,
    category: "accessories",
    image: [img1],
    description: "كريم مرطب غني بحمض الهيالورونيك يعيد الترطيب العميق للبشرة ويمنحها نضارة طبيعية تدوم طوال اليوم.",
  },
  {
    id: "2",
    name: "سيروم فيتامين سي للتفتيح",
    price: 220,
    oldPrice: 299,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    description: "سيروم مركّز بفيتامين سي النقي لتفتيح البشرة وتوحيد لونها مع حماية من أضرار أشعة الشمس.",
  },
  {
    id: "3",
    name: "غسول وجه رغوي لطيف",
    price: 95,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    description: "غسول رغوي لطيف ينظف البشرة بعمق دون أن يسبب الجفاف، مناسب لجميع أنواع البشرة.",
  },
  {
    id: "4",
    name: "أحمر شفاه مات طويل الأمد",
    price: 135,
    oldPrice: 180,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    description: "أحمر شفاه بتركيبة مات مخملية تدوم حتى ١٢ ساعة مع ترطيب فائق للشفاه.",
  },
  {
    id: "5",
    name: "باليت ظلال عيون ١٢ لون",
    price: 275,
    oldPrice: 350,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    description: "باليت احترافي يحتوي على ١٢ لوناً متناسقاً بين المات والشيمر لإطلالات لا حدود لها.",
  },
  {
    id: "6",
    name: "كريم أساس خفيف بتغطية متوسطة",
    price: 199,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=400&h=400&fit=crop",
    description: "كريم أساس بتركيبة خفيفة يمنح تغطية متوسطة قابلة للبناء مع مظهر طبيعي.",
  },
  {
    id: "7",
    name: "فرشاة مكياج احترافية ٧ قطع",
    price: 165,
    oldPrice: 220,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    description: "طقم فرش مكياج احترافي مكون من ٧ قطع بشعيرات ناعمة فائقة الجودة.",
  },
  {
    id: "8",
    name: "حقيبة مستحضرات تجميل جلد",
    price: 145,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1590156546674-5c4e3c57fdc2?w=400&h=400&fit=crop",
    description: "حقيبة أنيقة من الجلد الصناعي الفاخر لتنظيم وحفظ مستحضرات التجميل أثناء السفر.",
  },
  {
    id: "9",
    name: "ماسكارا تكثيف وإطالة الرموش",
    price: 110,
    oldPrice: 155,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    description: "ماسكارا بفرشاة مبتكرة تمنح رموشك كثافة وطولاً مذهلاً دون تكتل.",
  },
  {
    id: "10",
    name: "قناع وجه بالطين المغربي",
    price: 85,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    description: "قناع طبيعي بالطين المغربي الأصلي ينقي البشرة ويزيل الشوائب ويضيق المسام.",
  },
  {
    id: "11",
    name: "إسفنجة مكياج سيليكون",
    price: 45,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1583241800698-e8ab01830e07?w=400&h=400&fit=crop",
    description: "إسفنجة مكياج ناعمة من السيليكون لتطبيق كريم الأساس بتوزيع مثالي.",
  },
  {
    id: "12",
    name: "واقي شمس بعامل حماية ٥٠",
    price: 175,
    oldPrice: 230,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1532947974-2e3986375243?w=400&h=400&fit=crop",
    description: "واقي شمس خفيف بعامل حماية SPF 50 يحمي البشرة من الأشعة فوق البنفسجية دون ترك أثر أبيض.",
  },
];
