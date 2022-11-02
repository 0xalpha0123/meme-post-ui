import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return <img src={theme === "dark" ? "logo_dark.png" : "logo.png"} />;
};

export default Logo;
