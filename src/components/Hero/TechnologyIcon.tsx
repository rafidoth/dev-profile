import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiNeovim } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export default function TechnologyIcon({
  iconName,
  color,
  size,
}: {
  iconName: string;
  color: string;
  size: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const defaultColor = `rgba(255, 255, 255, 0.3)`; // Default color when not hovered

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  switch (iconName) {
    case "docker":
      return (
        <FaDocker
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "javascript":
      return (
        <RiJavascriptFill
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "golang":
      return (
        <FaGolang
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "typescript":
      return (
        <BiLogoTypescript
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "java":
      return (
        <FaJava
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "git":
      return (
        <FaGitAlt
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "react":
      return (
        <GrReactjs
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "nextjs":
      return (
        <SiNextdotjs
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "nodejs":
      return (
        <DiNodejs
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    case "neovim":
      return (
        <SiNeovim
          color={isHovered ? color : defaultColor}
          size={size}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      );
    default:
      return null; // Return null if no matching icon name is found
  }
}
