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
    title: "Senior Full-Stack Developer",
    location: "Montevideo, Uruguay",
    description:
      "I'm now a senior full-stack developer working at Octobot. My stack includes React, TypeScript, Django and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "July, 2019 - present",
  },
  {
    title: "Graduated as a Software Engineer at UdelaR University.",
    location: "Montevideo, Uruguay",
    description:
      "I graduated after 6 years of studying. I learned a lot about software development, algorithms, data structures, databases, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "March, 2016 - July, 2022",
  },
] as const;

export const projectsData = [
  {
    title: "traceit.io",
    description:
      "Traceit is a COT (Customer-Oriented Traceability) system focused on the fruit and vegetable trade.",
    tags: ["React", "Django", "PostgreSQL", "TypeScript", "Chakra UI", "Django REST Framework", "AWS"],
    imageUrl: traceitImg,
  },
  {
    title: "oscarmunoz-dev.com",
    description:
      "I created this project in order to have a personal website where I can show my skills and projects.",
    tags: ["React", "Next JS", "TypeScript", "Tailwind"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "SQL",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Django REST Framework",
  "Chakra UI",
  "AWS",
  "Docker",
] as const;