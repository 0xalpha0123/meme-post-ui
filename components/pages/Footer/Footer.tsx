import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full p-6 justify-between text-sm border-t-2 border-t-bg_white_secondary dark:border-t-bg_dark_secondary text-primary_white-300 dark:text-primary_dark-300">
      <div>
        &copy;2022 - <span className="text-secondary">Frax</span> Dashboard{" "}
        <span className="text-secondary">&middot;</span> Made by{" "}
        <span className="text-secondary">AllThemes</span>
      </div>
      <div className="flex gap-3">
        <Link href="/">About</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Policy</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
