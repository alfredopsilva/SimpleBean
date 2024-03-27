import React from "react";

type InputProps = {
  type: string;
  id: string;
  label: string;
  name: string;
  halfSize?: boolean;
  pattern?: string;
};

export default function Input({
  type,
  id,
  label,
  name,
  halfSize = false,
  pattern,
}: InputProps) {
  return (
    <div className={`relative mt-4 ${halfSize ? "w-1/2" : "w-full"}`}>
      <input
        type={type}
        name={name}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-accentColor/30 appearance-none dark:text-white dark:border-accentColor dark:focus:border-accentColor/500 focus:outline-none focus:ring-0 focus:border-accentColor/60 peer"
        placeholder=" "
        pattern={pattern}
        required
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accentColor/60 peer-focus:dark:text-accentColor/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
}
