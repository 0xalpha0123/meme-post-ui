import React, { useEffect, useState } from "react";

import { ArrowUpIcon } from "../../icons";

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
        } animate-bounce duration-100 inline-flex items-center rounded-full p-3 shadow-sm border border-primary_white-200 dark:border-primary_dark-200 bg-primary_white-300 dark:bg-primary_dark-200 hover:bg-primary_white-400 dark:hover:bg-primary_dark-300 focus:outline-none focus:ring-0 text-primary_white-1000 dark:text-primary_dark-1000`}
      >
        <ArrowUpIcon className="stroke-current" />
      </button>
    </div>
  );
};

export default ScrollToTop;
