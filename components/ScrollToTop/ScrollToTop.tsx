import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "../Icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-12 right-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } animate-bounce duration-300 bg-opacity-30 inline-flex items-center rounded-full p-3 shadow-sm transition-opacity bg-white dark:bg-bg_dark hover:bg-primary_white-200 dark:hover:bg-primary_dark-200 focus:outline-none focus:ring-0`}
      >
        <ArrowUpIcon className="stroke-current" />
      </button>
    </div>
  );
};

export default ScrollToTop;
