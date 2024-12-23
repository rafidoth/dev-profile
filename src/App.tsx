import styles from "./App.module.scss";
import Desktop from "./components/Desktop/Desktop";
import myfn from "./MyFn";

function App() {
  const classnames: Array<string> = [];
  classnames.push(styles.screen);

  return (
    <>
      <div className={myfn.getClassName(classnames)}>
        <Desktop />
      </div>
    </>
  );
}

export default App;
