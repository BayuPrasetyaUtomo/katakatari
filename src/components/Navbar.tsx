import Link from "next/link";
import React from "react";
import KatakatariIcon from "./KatakatariIcon";

export default function Navbar() {
  return (
    <nav className="sticky top-0 mx-auto flex h-20 max-w-[70%] items-center justify-between">
      <ul className="flex h-full items-center gap-6">
        <Link href="/">
          <KatakatariIcon className="h-12 w-32 text-sky-300" />
        </Link>
        <div className="divider"></div>
        <li>
          <Link href="/story" className="text-lg font-semibold dark:text-white">
            Story
          </Link>
        </li>
        <li>
          <Link href="/learn" className="text-lg font-semibold dark:text-white">
            Learn
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-lg font-semibold dark:text-white">
            About
          </Link>
        </li>
      </ul>
      <button className="h-10  rounded-md bg-secondary-800 px-4 text-lg font-semibold hover:bg-secondary-600 dark:bg-secondary-600 dark:hover:bg-secondary-500">
        Contact
      </button>
    </nav>
  );
}
