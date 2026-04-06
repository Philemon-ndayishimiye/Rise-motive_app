
export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  emoji: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Office Stationery Bundle",
    category: "Office Supplies",
    description: "Complete set of pens, markers, staplers & notebooks for your workspace.",
    fullDescription:
      "This bundle includes 5 ballpoint pens, 2 permanent markers, 1 stapler with 500 staples, 2 A4 notebooks (100 pages each), a ruler, and a pencil case. Ideal for office workers, students, and professionals who need reliable everyday stationery.",
    emoji: "📎",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Student Learning Kit",
    category: "Student Materials",
    description: "Everything a student needs — notebooks, pens, calculator & geometry set.",
    fullDescription:
      "Designed for secondary and university students, this kit contains 3 subject notebooks, 10 pens (assorted), a scientific calculator, a geometry set (compass, protractor, ruler), highlighters, and a pencil sharpener. Everything packed neatly in a carry pouch.",
    emoji: "📚",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Printer Paper — A4 Ream",
    category: "Paper Products",
    description: "500 sheets of high-quality A4 80gsm white paper for crisp printing.",
    fullDescription:
      "Premium 80gsm A4 white paper — perfect for laser and inkjet printers. 500 sheets per ream. Acid-free and suitable for double-sided printing. Ideal for offices, schools, printing shops, and home use. Packaged to prevent moisture and bending.",
    emoji: "🗒️",
  },
  {
    id: 4,
    name: "Business Card Package",
    category: "Printing Services",
    description: "250 professionally printed double-sided business cards, custom design.",
    fullDescription:
      "Get 250 high-quality double-sided business cards printed on 350gsm matte or glossy card stock. You provide your design or we help you create one. Includes name, title, phone, email, and logo. Delivered within 2–3 business days after design approval.",
    emoji: "🪪",
    badge: "New",
  },
  {
    id: 5,
    name: "Presentation Folder Set",
    category: "Office Supplies",
    description: "Set of 10 professional A4 presentation folders in assorted colors.",
    fullDescription:
      "A set of 10 sturdy polypropylene A4 presentation folders with inside pockets for business cards and documents. Available in assorted colors (blue, black, red, green, yellow). Perfect for meetings, proposals, school projects, and official submissions.",
    emoji: "📁",
  },
];
