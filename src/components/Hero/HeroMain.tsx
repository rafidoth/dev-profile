
import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import PhotoTitle from './PhotoTitle';
import SwitchButton from './SwitchButton';




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
  return <div style={
    {
      //background: "red",
      width: "800px",
      height: "600px",
      display: "flex",
      justifyContent: "space-between",
    }
  }>
    <div></div>
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }
    }
    >
      <div
        onMouseEnter={() => setBright(true)}
        onMouseLeave={() => setBright(false)}
      >{profile}</div>

      <SwitchButton toggleState={toggle} changeToggleState={setToggle} />
    </div>
  </div>
}
