import React from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "../../icons";

const ToggleThemeIcon = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button className="relative" onClick={handleThemeChange}>
      {theme !== "dark" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ToggleThemeIcon;
