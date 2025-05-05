import React from "react";
import engageLogo from "../assets/engage-logo.png";

interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "primary";
}

const Logo: React.FC<LogoProps> = ({ size = "medium", color = "dark" }) => {
  // Définition des tailles fixes en classes Tailwind pour éviter les problèmes d'interpolation
  const sizes = {
    small: { className: "w-10 h-10", textSize: "text-[10px]", subTextSize: "text-[7px]" },
    medium: { className: "w-14 h-14", textSize: "text-[14px]", subTextSize: "text-[9px]" },
    large: { className: "w-20 h-20", textSize: "text-[18px]", subTextSize: "text-[12px]" },
  };

  // Définition des couleurs
  const colors = {
    light: { bg: "bg-white", text: "text-primary" },
    dark: { bg: "bg-primary", text: "text-white" },
    primary: { bg: "bg-primary", text: "text-white" },
  };

  // Récupération des valeurs avec fallback sécurisé
  const sizeClass = sizes[size] || sizes.medium;
  const colorClass = colors[color] || colors.dark;

  return (
    <>
      <span className={`${colorClass.text} ${sizeClass.textSize} font-bold leading-none tracking-wide`}>ENGAGE</span>
      <span className={`${colorClass.text} ${sizeClass.subTextSize} font-semibold leading-none tracking-wide`}>PARIS</span>
    </>
  );
};

export default Logo;