"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Drop in a message & I&apos;ll get back to you!
        </p>
        <div className="socials flex flex-row gap-2 items-center justify-center">
          <Link href="https://github.com/amalguduru" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/amal-guduru/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>

          <h3 className="font-semibold text-violet-500">
            amalguduru09@gmail.com
          </h3>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
