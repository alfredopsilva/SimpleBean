import Image, { StaticImageData } from "next/image";
import CoffePackage from "@/public/images/CoffePackage.webp";
import { coffeeBeanProducts } from "../data/coffeePackage";

type ProductCardProps = {
  href: StaticImageData;
  product: string;
  price: number;
  origin: string;
  roast: string;
  tastingNotes: string[];
  altitude: number;
  grindType: string;
};

const ProductCard = (product: ProductCardProps) => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image src={product.href} alt="Coffe Beans Package" fill />
      </div>
      <h1>{product.product}</h1>
    </div>
  );
};

export default ProductCard;
