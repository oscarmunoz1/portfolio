"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
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
        technologies such as ReactJS, and backend, Python with Django. I have
        experience working with Docker and Kubernetes.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Django, and PostgreSQL.
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football with friends, watching movies and series, and listening to
        music. I'm a fan of the Uruguayan football league, my favorite team is
        Nacional. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Node JS and Next</span>.
        I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
