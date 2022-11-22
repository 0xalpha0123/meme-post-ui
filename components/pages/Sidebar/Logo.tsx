import React from "react";
import { useTheme } from "next-themes";

const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? "logo_dark.png" : "logo.png"}
      className="mx-auto"
    />
  );
};

export default Logo;
