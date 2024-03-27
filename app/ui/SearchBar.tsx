import React from "react";
import Image from "next/image";
import SearchIcon from "@/public/icons/find.svg";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full gap-2 mt-4 mx-auto text-sm text-softBlack border-b-2 border-accentColor/70 appearance-none dark:text-white dark:border-accentColor dark:focus:border-accentColor/500">
      <Image src={SearchIcon} alt="Search Icon" width={20} />
      <input
        type="text"
        className="bg-transparent px-1 py-2 outline-none w-full"
      />
    </div>
  );
}
