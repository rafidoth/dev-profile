import { RiFolder5Fill } from "react-icons/ri";
import styles from "./Application.module.scss";
import myfn from "../../../MyFn";
import React from "react";

interface P {
  iconName: string;
}

const Application = (props: P) => {
  const [selected, setSelected] = React.useState(false);
  const selectedDom = React.useRef<HTMLDivElement>(null);
  const cls: Array<string> = [];
  cls.push(styles.main);
  cls.push("dark");

  const titleClass: Array<string> = [];
  if (selected) titleClass.push(styles.selected);
  React.useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (
        selectedDom.current &&
        !selectedDom.current.contains(event.target as HTMLElement)
      ) {
        if (selected) setSelected(!selected);
      }
    };
    if (selected) document.addEventListener("click", handleGlobalClick);

    return () => {
      if (selected) document.removeEventListener("click", handleGlobalClick);
    };
  }, [selected]);

  return (
    <div
      ref={selectedDom}
      className={myfn.getClassName(cls)}
      onClick={() => {
        if (!selected) setSelected(!selected);
      }}
      onDoubleClick={() => {
        console.log("double clicked");
      }}
    >
      <RiFolder5Fill size="2em" color="white" />
      <span className={myfn.getClassName(titleClass)}>
        <p>{props.iconName} </p>
      </span>
    </div>
  );
};

export default Application;
