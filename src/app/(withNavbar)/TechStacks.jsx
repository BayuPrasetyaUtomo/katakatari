import { cn } from "@/utils/cn";
import React from "react";

export default function TechStacks() {
  return (
    <div className="mx-auto max-w-[70%]">
      <div className="grid grid-cols-4 justify-between gap-y-10 py-20">
        {tech.map((el, i) => (
          <TechStack key={i} el={el} />
        ))}
      </div>
    </div>
  );
}

function TechStack({ el }) {
  return (
    <div className="flex w-72 max-w-72 flex-col items-center rounded border bg-slate-500 py-4">
      <p className="text-2xl font-semibold text-sky-300">{el.name}</p>
      <img src={el.icon} className={cn("object-contain", el.size)} alt="" />
    </div>
  );
}

const tech = [
  {
    name: "Node JS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    size: "h-40 w-52",
  },
  {
    name: "Express JS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    size: "h-40 w-72",
  },
  {
    name: "Mongo DB",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    size: "h-40 w-60",
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    size: "h-40 w-52",
  },
  {
    name: "Next JS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    size: "h-40 w-60",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    size: "h-40 w-32",
  },
  {
    name: "Vite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    size: "h-40 w-52",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg",
    size: "h-40 w-60",
  },
];
