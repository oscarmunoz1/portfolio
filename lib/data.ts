import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import portfolioImg from "@/public/portfolio.png";
import traceitImg from "@/public/traceit.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated as a Software Engineer at UdelaR University.",
    location: "Montevideo, Uruguay",
    description:
      "I graduated after 6 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Senior Full-Stack Developer",
    location: "Montevideo, Uruguay",
    description:
      "I'm now a senior full-stack developer working at Octobot. My stack includes React, TypeScript, Django and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "traceit.io",
    description:
      "I created this project from scratch.",
    tags: ["React", "Django", "PostgreSQL"],
    imageUrl: traceitImg,
  },
  {
    title: "oscarmunoz-dev.com",
    description:
      "I created this project from scratch.",
    tags: ["React", "Next JS", "TypeScript", "Tailwind"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;