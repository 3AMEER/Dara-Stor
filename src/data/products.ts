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
import img27 from '../../src/img/Product27.jpeg'
import img28 from '../../src/img/Product28.jpeg'
import img29 from '../../src/img/Product29.jpeg'
import img30 from '../../src/img/Product30.jpeg'

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
     {
    id: "37",
    name: "  جان جيل ترطيب البشرة الدهنية",
    price: 120,
    oldPrice: 140,
    category: "skincare",
    image: img27,
    description: "جان جيل ترطيب البشرة الدهنية والمعرضة لظهور الحبوب والبثور، ويعالج المسام الواسعه",
  },
     {
    id: "37",
    name: "زعفران سيروم لتوريد الشفاه والخدود",
    price: 120,
    oldPrice: 140,
    category: "skincare",
    image: img28,
    description: " زعفران سيروم لتوريد الشفاه والخدود بديل البلشر يرطب البشرة ،يحتوى على الكولاجين ويعطى توريد طبيعى 💯 💯",
  },
     {
    id: "37",
    name: "دراى أويل شيمر ترطيب، لمعه جذابة",
    price: 120,
    oldPrice: 140,
    category: "skincare",
    image: img29,
    description: "دراى أويل شيمر ترطيب، لمعه جذابة",
  },
     {
    id: "37",
    name: "سيروم الريتينول لتجديد خلايا البشرة وتقليل المسام الواسعه",
    price: 120,
    oldPrice: 140,
    category: "skincare",
    image: img30,
    description: "سيروم الريتينول لتجديد خلايا البشرة وتقليل المسام الواسعه وعلاج تصبغات البشرة، التجاعيد وعلامات التقدم في العمر لا غنى عنه لاى امرأة بعد الثلاثين.",
  },
];
