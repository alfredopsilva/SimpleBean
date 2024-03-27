import Image from "next/image";
import React from "react";
import Logo from "@/public/images/Logo.png";
import Link from "next/link";
import Input from "@/app/ui/Input";

export default function SingUp() {
  return (
    <main className="px-6 py-2">
      <header className="w-full flex justify-center items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="Simple Bean Logo" width={96} />
        </Link>
      </header>
      <h5 className="uppercase text-2xl text-center mt-10">
        Create your account
      </h5>
      <form method="POST" action={"#"} className="mt-10">
        <div className="flex flex-col">
          <div className="flex gap-2 mt-2">
            <Input
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              halfSize={true}
            />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              halfSize={true}
            />
          </div>
          <Input type="phone" id="phone" name="phone" label="Phone" />
          <Input type="text" id="address" name="address" label="Address" />
          <div className="flex gap-2">
            <Input type="text" id="city" name="city" label="City" />
            <Input
              type="text"
              id="postalCode"
              name="postalCode"
              label="Postal Code"
              pattern="/^[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d$/i"
            />
          </div>
          <Input
            type="email"
            id="email"
            name="email"
            label="Email"
            pattern="^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$
"
          />
          <div className="flex gap-2 mt-6">
            <Input
              type="password"
              name="password"
              id="password"
              label="Password"
            />
            <Input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              label="Repeat Password"
            />
          </div>
          <div className="flex flex-col mt-20 gap-4 w-full">
            <button type="submit" className="button-primary">
              Login
            </button>
            <button type="reset" className="button-secondary">
              Reset
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
