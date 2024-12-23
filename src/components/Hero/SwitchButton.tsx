import React from 'react';
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";

export default function SwitchButton({
  toggleState, changeToggleState
}: {
  toggleState: boolean,
  changeToggleState: (toggle: boolean) => void
}) {
  const toggleLeft =
    <MdToggleOff color={"white"} size={"3em"}
      style={{
        cursor: "pointer"
      }}
      onClick={() => changeToggleState(!toggleState)}
    />;
  const toggleRight =
    <MdToggleOn color={"white"} size={"3em"}
      style={{
        cursor: "pointer"
      }}
      onClick={() => changeToggleState(!toggleState)}
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
