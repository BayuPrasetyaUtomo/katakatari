import React from "react";
import BrandsIcon from "./BrandsIcon";
import KatakatariIcon from "./KatakatariIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="about" className="mx-auto max-w-[70%] py-20">
      <div className="mb-5 flex justify-between">
        <div className="h-40 w-[25%]">
          <KatakatariIcon className="mb-3 h-20 w-48 text-sky-300" />
          <p className="line-clamp-3 text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos
            tempora voluptatum qui ratione quis voluptatem itaque totam dolorem
            quae repudiandae ullam minus, voluptate velit, ut excepturi quidem,
            quos officia.
          </p>
        </div>
        {/* <FooterLinks /> */}
        <div className="flex w-[25%] flex-col gap-3 py-4">
          <p className="text-lg">bayu.prasetya.utomo@gmail.com</p>
          <p className="line-clamp-2 text-sm font-light text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            possimus tempora magnam in neque dolor odio, amet est expedita, sint
            hic reprehenderit itaque. Maxime, sunt aliquid ducimus libero quam
            impedit!
          </p>
          <p className="text-sm font-light text-gray-400">+00 000-0000-0000</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <BrandsIcon />
        <p className="w-[25%]">© 2024 - Katakatari</p>
      </div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="px-24 font-semibold">
      {children}
    </Link>
  );
}

function FooterLinks() {
  return (
    <>
      <div className="flex w-[25%] flex-col justify-center gap-4">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/">Tentang Kami</FooterLink>
        <FooterLink href="/">Program</FooterLink>
      </div>
      <div className="flex w-[25%] flex-col justify-center gap-4">
        <FooterLink href="/">Ujian</FooterLink>
        <FooterLink href="/">Mentor</FooterLink>
        <FooterLink href="/">Berita</FooterLink>
      </div>
    </>
  );
}
