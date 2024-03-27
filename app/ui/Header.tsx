"use client";

import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import Menu from "@/public/icons/menu.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center relative">
      <Link href={"/"}>
        {/* TODO: Add blurData to this image */}
        <Image src={Logo} alt="SimpleBean Logo" width={96} />
      </Link>
      <div className="absolute right-5 top-7">
        <Image
          src={Menu}
          alt="Menu Icon"
          width={28}
          onClick={() => console.log("Clickei")}
        />
      </div>
    </header>
  );
}
