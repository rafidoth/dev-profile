import styles from "./TitleBar.module.scss";
import myfn from "../../../MyFn";
import yellowCircle from "../../../assets/yellowCircle.svg";
import redCircle from "../../../assets/redcircle.svg";
import greenCircle from "../../../assets/greencircle.svg";

interface P {
  maximized: boolean;
  resize: (prev: boolean) => void;
  TitleRef: HTMLDivElement;
}

export default function TitleBar({ maximized, resize, TitleRef }: P) {
  const cls: Array<string> = [];
  cls.push("dark");
  cls.push(styles.titleBar);
  if (maximized) cls.push(styles.maximized);
  return (
    <div className={myfn.getClassName(cls)} ref={TitleRef}>
      <div className={styles.title}>
        {/* Title   */}
        File Explorer
      </div>
      <div className={styles.options}>
        {/* Window Options */}
        {[
          { icon: yellowCircle, fn: () => {} },
          {
            icon: greenCircle,
            fn: () => {
              resize(!maximized);
            },
          },
          { icon: redCircle, fn: () => {} },
        ].map((ele, index) => {
          return (
            <img
              onClick={ele.fn}
              key={index + 1}
              className={styles.ico}
              src={ele.icon}
              width={12}
            />
          );
        })}
        {/* <IoCloseCircle style={{ cursor: "pointer" }} />
        <TbSquaresSelected
          style={{ cursor: "pointer" }}
          onClick={() => resize(!maximized)}
        />
        <FaMinusCircle style={{ cursor: "pointer" }} /> */}
      </div>
    </div>
  );
}
