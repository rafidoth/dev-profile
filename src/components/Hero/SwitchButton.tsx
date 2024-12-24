import React from 'react';
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";

export default function SwitchButton({
  toggleState, changeToggleState
}: {
  toggleState: boolean,
  changeToggleState: (toggle: boolean) => void
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const toggleLeft =
    <MdToggleOff color={`rgba(255,255,255,${isHovered ? 1 : 0.5})`} size={"3em"}
      style={{
        cursor: "pointer"
      }}
      onClick={() => changeToggleState(!toggleState)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />;
  const toggleRight =
    <MdToggleOn color={`rgba(255,255,255,${isHovered ? 1 : 0.5})`} size={"3em"}
      style={{
        cursor: "pointer"
      }}
      onClick={() => changeToggleState(!toggleState)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />;
  return (<span
    style={
      {
        display: "flex",
        justifyContent: "center",
        background: "transparent",
        border: "none",
      }
    }
  >
    {toggleState ? toggleLeft : toggleRight}
  </span>)
}
