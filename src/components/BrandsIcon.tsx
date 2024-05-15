import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

import React from "react";
import { brand } from "@/types";
import Link from "next/link";

export default function BrandsIcon() {
  return (
    <div className="flex gap-1">
      {brands.map((brand, idx) => (
        <Icon key={idx} brand={brand} />
      ))}
    </div>
  );
}

const Icon = ({ brand }: { brand: brand }) => (
  <Link
    href={brand.url}
    className="flex size-8 items-center justify-center rounded-sm bg-secondary-800 text-white"
  >
    {brand.icon}
  </Link>
);

const brands = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="size-5" />,
    url: process.env.NEXT_PUBLIC_personal_facebook_link as string,
  },
  // {
  //   name: "Twitter",
  //   icon: <FaTwitter className="size-5" />,
  //   url: process.env.NEXT_PUBLIC_personal_twitter_link as string,
  // },
  {
    name: "Instagram",
    icon: <FaInstagram className="size-5" />,
    url: process.env.NEXT_PUBLIC_personal_instagram_link as string,
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="size-5" />,
    url: process.env.NEXT_PUBLIC_personal_linkedin_link as string,
  },
  {
    name: "Github",
    icon: <FaGithub className="size-5" />,
    url: process.env.NEXT_PUBLIC_personal_github_link as string,
  },
];
