import React from "react";
import TechStacks from "./TechStacks";

export default function page() {
  return (
    <>
      <HeroLanding />
      <TechStacks />
    </>
  );
}

function HeroLanding() {
  return (
    <div className="container mx-auto flex min-h-dvh max-w-[70%] items-center">
      <div className="flex max-w-[60%] flex-col">
        <HeroIntroduction />
      </div>
      <img src="logo-no-background.svg" className="size-96 text-sky-300" alt="" />
    </div>
  );
}

function HeroIntroduction() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Welcome to Katakatari</h1>
      <div className="flex flex-col gap-2 pe-20">
        <p>
          I'm <b>Bayu Utomo</b>, a Fullstack Web Developer
          <br /> Specializing in end-to-end development of web applications.
        </p>
        <p>
          My expertise includes JavaScript, React, Node.js, and other modern
          technologies. I'm passionate about writing clean, efficient code and
          constantly learning new skills to deliver innovative solutions.
        </p>
        <p>
          Take a look around to learn more about my work, skills, and
          professional journey.
        </p>
      </div>
    </>
  );
}

function HeroImage() {
  return (
    <div className="h-96 w-[50%] rounded-sm bg-primary-600">
      <p className="hidden">-</p>
    </div>
  );
}
