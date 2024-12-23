import myfn from "../../MyFn";
import styles from "./Background.module.scss";
import Application from "./ApplicationIcon/Application";
import Hero from "../Hero/Hero";
import HeroMain from "../Hero/HeroMain";
const Background = () => {
  const cls: Array<string> = [styles.background];
  //cls.push("dark");

  return (
    <div className={myfn.getClassName(cls)}>
      <HeroMain />
    </div>
  );
};

export default Background;
