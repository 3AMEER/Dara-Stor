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
import img2 from '../../src/img/Product2.jpeg'
import img3 from '../../src/img/Product3.jpeg'
import img4 from '../../src/img/Product4.jpeg'
import img5 from '../../src/img/Product5.jpeg'
import img6 from '../../src/img/Product6.jpeg'
import img7 from '../../src/img/Product7.jpeg'
import img8 from '../../src/img/Product8.jpeg'
import img9 from '../../src/img/Product9.jpeg'
import img10 from '../../src/img/Product10.jpeg'
import img11 from '../../src/img/Product11.jpeg'
import img12 from '../../src/img/Product12.jpeg'
import img13 from '../../src/img/Product13.jpeg'
import img14 from '../../src/img/Product14.jpeg'
import img15 from '../../src/img/Product15.jpeg'
import img16 from '../../src/img/Product16.jpeg'
import img17 from '../../src/img/Product17.jpeg'
import img18 from '../../src/img/Product18.jpeg'
import img19 from '../../src/img/Product19.jpeg'
import img20 from '../../src/img/Product20.jpeg'
import img21 from '../../src/img/Product21.jpeg'
import img22 from '../../src/img/Product22.jpeg'
import img23 from '../../src/img/Product23.jpeg'
import img24 from '../../src/img/Product24.jpeg'
import img25 from '../../src/img/Product25.jpeg'
import img26 from '../../src/img/Product26.jpeg'

export const products: Product[] = [
  {
    id: "1",
    name: "سلسله شمس روبانزل بينك",
    price: 100,
    oldPrice: 180,
    category: "accessories",
    image: img1,
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
    {
    id: "13",
    name: "ساعات شي إن التحفه",
    price: 230,
    oldPrice: 250,
    category: "accessories",
    image: img2,
    description: "ساعه اوريجنال ومنسيابه لجميع الاعمار ويوجد جميع الاوان والاحجام   ",
  },
     {
    id: "14",
    name: "  هاند اتشين جولد ",
    price: 130,
    oldPrice: 170,
    category: "accessories",
    image: img3,
    description: "    هاند اتشين جولد اناقه وتحفه وماتريال قويه جدا",
  },
      {
    id: "15",
    name: " سلسله بامب",
    price: 80,
    oldPrice: 110,
    category: "accessories",
    image: img4,
    description: "  سلاسل حروف اناقه وشياكه ومتريال  استانلس ستيل قويه جدا ",
  },
      {
    id: "16",
    name: "  هاند اتشين جولد ",
    price: 180,
    oldPrice: 200,
    category: "accessories",
    image: img5,
    description: "   شنط بناتي احدث موديل تحفه ومتريال قومي جدا وتعيش معاكي ويوجد منها جميع الاوان ",
  },
      {
    id: "17",
    name: "  هاند اتشين جولد بالخاتم بتاعه",
    price: 140,
    oldPrice: 170,
    category: "accessories",
    image: img6,
    description: "    هاند اتشين جولد اناقه وتحفه وماتريال قويه جدا",
  },
      {
    id: "18",
    name: "  خاتم اسكوير جولد",
    price: 80,
    oldPrice: 110,
    category: "accessories",
    image: img7,
    description: "   خاتم اسكوير جولد خاتم تحفه وفي منه جميع المقسات ومتريال قويه جدا ",
  },
      {
    id: "19",
    name: "  هاند اتشين جولد ",
    price: 120,
    oldPrice: 150,
    category: "accessories",
    image: img8,
    description: "    هاند اتشين جولد اناقه وتحفه وماتريال قويه جدا",
  },
      {
    id: "20",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img9,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
    {
    id: "21",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img10,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
   {
    id: "22",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img11,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
   {
    id: "23",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img12,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
   {
    id: "24",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img13,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
   {
    id: "25",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img14,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
   {
    id: "26",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img15,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
     {
    id: "27",
    name: "  سلسله احجار فصوص",
    price: 150,
    oldPrice: 200,
    category: "accessories",
    image: img16,
    description: "    سلسله احجار فصوص تحفه ومتريال قويه جدا ",
  },
     {
    id: "28",
    name: "  هاندتشين استانلس",
    price: 110,
    oldPrice: 130,
    category: "accessories",
    image: img17,
    description: "    هاندتشين استانلس تحفه ومتريال قويه جدا",
  },
     {
    id: "29",
    name: "  خاتم فري سايز",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img18,
    description: "    خاتم فري سايز تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
     {
    id: "30",
    name: "  منظم اكسسورات",
    price: 40,
    oldPrice: 60,
    category: "accessories",
    image: img19,
    description: "    منظم اكسسورات تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
     {
    id: "31",
    name: " حلقان بيرسنج  جولد بلاتيد",
    price: 140,
    oldPrice: 160,
    category: "accessories",
    image: img20,
    description: "    حلقان بيرسنج  جولد بلاتيد تحفه ومتريال قويه جدا",
  },
     {
    id: "32",
    name: "  شنطه يد",
    price: 220,
    oldPrice: 280,
    category: "accessories",
    image: img21,
    description: "    شنطه يد تحفه وفي منه جميع المقسات ومتريال قويه جدا",
  },
     {
    id: "33",
    name: "  انسيال تلاته دور تحفه ",
    price: 110,
    oldPrice: 130,
    category: "accessories",
    image: img22,
    description: "    انسيال تلاته دور تحفه ومتريال قويه جدا",
  },
     {
    id: "34",
    name: "  انسيال دورين",
    price: 130,
    oldPrice: 160,
    category: "accessories",
    image: img23,
    description: "    انسيال دورين تحفه ومتريال قويه جدا",
  },
     {
    id: "35",
    name: "  خاتم استانلس عليه ضمان",
    price: 90,
    oldPrice: 110,
    category: "accessories",
    image: img24,
    description: "    خاتم استانلس عليه ضمان ومتريال قويه جدا",
  },
     {
    id: "36",
    name: "  سلسله داليه طويله",
    price: 140,
    oldPrice: 160,
    category: "accessories",
    image: img25,
    description: "    سلسله داليه طويله تحفه ومتريال قويه جدا",
  },
     {
    id: "37",
    name: "  سلسله حمصه طويله",
    price: 120,
    oldPrice: 140,
    category: "accessories",
    image: img26,
    description: "    سلسله حمصه طويله تحفه ومتريال قويه جدا",
  },
];
