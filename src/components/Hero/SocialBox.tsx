import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

export default function SocialBox() {
  const [ghHovered, setGhHovered] = React.useState(false);
  const [lHovered, setLHovered] = React.useState(false);
  const [mailHovered, setMailHovered] = React.useState(false);
  return (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90px",
        fontSize: "1.5em",
      }}
    >
      <span>{<VscGithubAlt
        style={{ cursor: "pointer" }}
        color={ghHovered ? "rgb(255, 87, 34)" : "rgba(255, 255, 255, 0.3)"}
        onMouseEnter={() => setGhHovered(true)}
        onMouseLeave={() => setGhHovered(false)}
      />}</span>
      <span>{<GrLinkedinOption
        style={{ cursor: "pointer" }}
        color={lHovered ? "rgb(0, 119, 181)" : "rgba(255, 255, 255, 0.3)"}
        onMouseEnter={() => setLHovered(true)}
        onMouseLeave={() => setLHovered(false)}
      />}</span>
      <span>{<SiGmail
        style={{ cursor: "pointer" }}
        color={mailHovered ? "rgb(241, 196, 15)" : "rgba(255, 255, 255, 0.3)"}
        onMouseEnter={() => setMailHovered(true)}
        onMouseLeave={() => setMailHovered(false)}
      />}</span>
    </span>
  )
}
