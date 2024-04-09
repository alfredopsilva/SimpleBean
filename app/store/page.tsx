import React from "react";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";
import ProductCard from "../ui/ProductCard";
import { coffeeBeanProducts } from "../data/coffeePackage";

export default function Store() {
  return (
    <main className="dark:bg-softBlack dark:text-offWhite">
      <Header />
      <section className="px-6">
        <SearchBar />
        <section className="my-6">
          {coffeeBeanProducts.map((product, index) => (
            <div key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
