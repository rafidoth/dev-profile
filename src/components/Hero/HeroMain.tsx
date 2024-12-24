
import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import PhotoTitle from './PhotoTitle';
import SwitchButton from './SwitchButton';
import SocialBox from './SocialBox';
import Btn from './Btn';
import TechnologyIcon from './TechnologyIcon';



const heroMainLeftSideStyle = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "inter",
}

const heroMainRightSideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

const rafidothTitleTextStyle = {
  fontSize: "2em",
  fontWeight: "bold"
}

const rafidothFirstRowStyle = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: "15px",
}

const heroMainStyle = {
  width: "700px",
  height: "400px",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  color: "white"
}



const introductionAreaStyle = {
  marginBottom: "30px"
}


const importantLinksStyle = {
  display: "flex",
  width: "350px",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "30px",
}


const contentDisplayStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "300px",
  gap: "10px"
}


export default function HeroMain() {
  const [toggle, setToggle] = React.useState(true);
  const [bright, setBright] = React.useState(false);
  let profile;
  if (toggle) {
    profile =
      <>
        <ProfilePhoto
          picture={bright ? "formal" : "formalbw"}
          changeBright={setBright}
        />
        <PhotoTitle title={"formal"} />
      </>
  } else {
    profile =
      <>
        <ProfilePhoto
          picture={bright ? "casual" : "casualbw"}
          changeBright={setBright}
        />
        <PhotoTitle title={"casual"} />
      </>
  }
  return <div style={heroMainStyle}>
    <div style={heroMainLeftSideStyle} >
      <section style={introductionAreaStyle}>
        <div style={rafidothFirstRowStyle}>
          <span style={rafidothTitleTextStyle}>@rafidoth</span>
          <SocialBox />
        </div>
        <span>An average computer science fanboy.</span>
      </section>
      <section style={importantLinksStyle}>
        <Btn
          buttonText={"Things I built"}
          buttonWidth="100"
          buttonHoverColor={
            { color: "000", background: "rgb(241,196,15)" }
          }
        />

        <Btn
          buttonText={"Blogs"}
          buttonWidth="60"
          buttonHoverColor={
            { color: "000", background: "#81D4FA" }
          }
        />

        <Btn
          buttonText={"Youtube"}
          buttonWidth="80"
          buttonHoverColor={
            { color: "000", background: "rgb(255, 87, 34)" }
          }
        />

        <Btn
          buttonText={"Problem Solving"}
          buttonWidth="130"
          buttonHoverColor={
            { color: "000", background: "#AED581" }
          }
        />

        <Btn
          buttonText={"Education"}
          buttonWidth="90"
          buttonHoverColor={
            { color: "000", background: "#FF8A65" }
          }
        />

        <Btn
          buttonText={"Productivity"}
          buttonWidth="100"
          buttonHoverColor={
            { color: "000", background: "#AED581" }
          }
        />

        <Btn
          buttonText={"Technologies My Knowledge Around"}
          buttonWidth="270"
          buttonHoverColor={
            { color: "000", background: "#FF1744" }
          }
        />
      </section>
      <section style={contentDisplayStyle}>
        <TechnologyIcon
          iconName="javascript"
          color="rgb(241, 196, 15)"  // Yellow for JavaScript
          size="3em"
        />

        <TechnologyIcon
          iconName="golang"
          color="rgb(0, 122, 82)"  // Green for Go
          size="3em"
        />

        <TechnologyIcon
          iconName="typescript"
          color="rgb(0, 122, 204)"  // Blue for TypeScript
          size="3em"
        />

        <TechnologyIcon
          iconName="java"
          color="rgb(255, 87, 34)"  // Orange for Java
          size="3em"
        />

        <TechnologyIcon
          iconName="git"
          color="rgb(233, 30, 99)"  // Pink for Git
          size="3em"
        />

        <TechnologyIcon
          iconName="nodejs"
          color="rgb(39, 174, 96)"  // Light Green for Node.js
          size="5em"
        />

        <TechnologyIcon
          iconName="react"
          color="rgb(97, 218, 251)"  // Light Blue for React
          size="3em"
        />

        <TechnologyIcon
          iconName="nextjs"
          color="rgb(255, 255, 255)"  // Bright Cyan for Next.js
          size="3em"
        />

        <TechnologyIcon
          iconName="docker"
          color="#0db7ed"  // Bright Cyan for Next.js
          size="3em"
        />

      </section>
    </div>

    <div style={heroMainRightSideStyle}>
      <div onMouseEnter={() => setBright(true)}
        onMouseLeave={() => setBright(false)}
      >{profile}</div>
      <SwitchButton toggleState={toggle} changeToggleState={setToggle} />
    </div>
  </div >
}
