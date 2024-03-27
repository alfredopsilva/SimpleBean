import React from "react";
import Header from "../ui/Header";
import SearchBar from "../ui/SearchBar";

export default function Store() {
  return (
    <main className="dark:bg-softBlack dark:text-offWhite">
      <Header />
      <section className="px-6">
        <SearchBar />
      </section>
    </main>
  );
}
