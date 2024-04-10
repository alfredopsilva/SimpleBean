import Image from "next/image";
import React from "react";

type IconProps = {
  src: string;
  modification?: string;
  alt: string;
  width: number;
};

export default function Icon({ src, modification, alt, width }: IconProps) {
  return (
    <Image alt={alt} src={src} width={width} className={`${modification}`} />
  );
}
