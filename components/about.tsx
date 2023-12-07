"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Software Engineer graduated at the University of the Republic. I
        have experience in web development, having knowledge of both frontend,
        technologies such as{" "}
        <span className="italic">
          React with TypeScript, and backend, Python with Django
        </span>
        . I have experience working with Docker and Kubernetes. My favorite part
        of programming is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Django, and PostgreSQL.</span> I am
        also familiar with TypeScript and some services of AWS. I am always
        looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football with friends, watching movies and series, and listening to
        music. I'm a fan of sports, especially Football, my favorite team is
        Nacional. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Node JS and NextJS</span>.
      </p>
    </motion.section>
  );
}
