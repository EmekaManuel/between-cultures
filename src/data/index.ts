// data/products.ts

import { Product } from "@/types/store";

export const products: Product[] = [
  {
    id: "1",
    name: "BC Foundation T-Shirt",
    price: 29.99,
    image: "/black-education.jpg",
    category: "Clothing",
    description:
      "Comfortable cotton t-shirt featuring the Between Cultures Foundation logo with Ankara fabric-inspired design elements.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Light Green", "Light Purple", "Gold"],
  },
  {
    id: "2",
    name: "Cultural Pride Hat",
    price: 24.99,
    image: "/black-education.jpg",
    category: "Accessories",
    description:
      "Adjustable cap with embroidered BC Foundation logo and traditional African pattern trim.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    colors: ["Light Green", "Light Purple", "Natural"],
  },
  {
    id: "3",
    name: "Heritage Water Bottle",
    price: 19.99,
    image: "/black-education.jpg",
    category: "Accessories",
    description:
      "Insulated stainless steel water bottle with cultural design motifs.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    colors: ["Light Green", "Light Purple"],
  },
  {
    id: "4",
    name: "BC Foundation Hoodie",
    price: 49.99,
    image: "/black-education.jpg",
    category: "Clothing",
    description:
      "Cozy hoodie with kangaroo pocket featuring Between Cultures Foundation branding.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Light Green", "Light Purple", "Charcoal"],
  },
  {
    id: "5",
    name: "Cultural Tote Bag",
    price: 22.99,
    image: "/black-education.jpg",
    category: "Accessories",
    description:
      "Eco-friendly canvas tote bag with Ankara-inspired patterns and BC Foundation logo.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    colors: ["Light Green", "Light Purple", "Multi-pattern"],
  },
  {
    id: "6",
    name: "Heritage Mug",
    price: 16.99,
    image: "/black-education.jpg",
    category: "Home",
    description:
      "Ceramic mug featuring cultural motifs and inspirational messaging.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    colors: ["Light Green", "Light Purple", "Gold Accent"],
  },
  {
    id: "7",
    name: "Childcare Guide Book",
    price: 34.99,
    image: "/black-education.jpg",
    category: "Educational",
    description:
      "Comprehensive guide for immigrant families navigating childcare systems in Canada.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "8",
    name: "Cultural Journal",
    price: 18.99,
    image: "/black-education.jpg",
    category: "Educational",
    description:
      "Beautiful notebook with cultural design elements for recording family stories and traditions.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],

    colors: ["Light Green", "Light Purple", "Gold"],
  },
];
