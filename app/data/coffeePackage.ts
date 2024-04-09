import MoonLightBeans from "@/public/images/MoonLight.webp";
import ShadowRoastBeans from "@/public/images/ShadowRoast.webp";
import GoldenArabicaBeans from "@/public/images/GoldenArabica.webp";
import MysticBlendBeans from "@/public/images/MysticBlend.webp";
import CrystalSumatraBeans from "@/public/images/CrystalSumatra.webp";
import { StaticImageData } from "next/image";

type CoffeeBeanProduct = {
  href: StaticImageData;
  product: string;
  price: number;
  origin: string;
  roast: string;
  tastingNotes: string[];
  altitude: number;
  grindType: string;
};

export const coffeeBeanProducts: CoffeeBeanProduct[] = [
  {
    href: MoonLightBeans,
    product: "Moonlight Bean",
    price: 18.99,
    origin: "Ethiopia",
    roast: "Medium",
    tastingNotes: ["floral", "berry", "chocolate"],
    altitude: 1800,
    grindType: "Whole Bean",
  },
  {
    href: GoldenArabicaBeans,
    product: "Golden Arabica",
    price: 16.5,
    origin: "Colombia",
    roast: "Light",
    tastingNotes: ["nutty", "citrus", "caramel"],
    altitude: 1200,
    grindType: "Espresso Grind",
  },
  {
    href: ShadowRoastBeans,
    product: "Shadow Roast",
    price: 20.0,
    origin: "Indonesia",
    roast: "Dark",
    tastingNotes: ["earthy", "spicy", "dark chocolate"],
    altitude: 800,
    grindType: "French Press Grind",
  },
  {
    href: MysticBlendBeans,
    product: "Mystic Blend",
    price: 17.75,
    origin: "Brazil",
    roast: "Medium-Dark",
    tastingNotes: ["nutty", "smoky", "bittersweet"],
    altitude: 900,
    grindType: "Drip Grind",
  },
  {
    href: CrystalSumatraBeans,
    product: "Crystal Sumatra",
    price: 19.25,
    origin: "Sumatra",
    roast: "Medium",
    tastingNotes: ["herbal", "chocolate", "earthy"],
    altitude: 1100,
    grindType: "Cold Brew Grind",
  },
];
