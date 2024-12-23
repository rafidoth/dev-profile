import myfn from "../../MyFn";
import Background from "../Background/Background";
import styles from "./Desktop.module.scss";
import WindowFrame from "../WindowFrame/WindowFrame";

const Desktop = () => {
  const cls: Array<string> = [styles.Desktop];
  //cls.push("dark");

  return (
    <div className={myfn.getClassName(cls)}>
      <Background />
    </div>
  );
};

export default Desktop;
