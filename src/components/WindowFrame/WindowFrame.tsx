import React from "react";
import styles from "./WindowFrame.module.scss";
import myfn from "../../MyFn";
import TitleBar from "./TitleBar/TitleBar";

interface P {
  children: React.ReactNode;
}

export default function WindowFrame(props: P) {
  const [isMaximized, setIsMaximied] = React.useState(false);
  const [windowFrameCoords, setWindowFrameCoords] = React.useState({
    x: 200,
    y: 0,
  });
  // const [isDragging, setIsDragging] = React.useState(false);
  const cls: Array<string> = [];
  const draggedWindow = React.useRef<HTMLDivElement>(null);
  const titleBarRef = React.useRef<HTMLDivElement>(null);
  cls.push(styles.main);
  cls.push(styles.frostedGlass);

  const handleDragStart = (event: MouseEvent) => {
    const rect = draggedWindow.current?.getBoundingClientRect();
    const pointerX = event.clientX;
    const pointerY = event.clientY;
    const relativePos = {
      rX: pointerX - (rect?.left ?? 0),
      rY: pointerY - (rect?.top ?? 0),
    };
    draggedWindow.current?.addEventListener("dragend", (event) => {
      handleDragEnd(event, relativePos);
    });
  };

  const handleDragEnd = (event: MouseEvent, { rX, rY }) => {
    const newPostion = {
      x: event.clientX - rX,
      y: event.clientY - rY,
    };
    setWindowFrameCoords(newPostion);
  };

  if (isMaximized) cls.push(styles.maximized);

  const style = {
    transform: `translate(${windowFrameCoords.x}px,${windowFrameCoords.y}px)`,
    // visibility: isDragging ? "hidden" : "visible",
  };
  return (
    <>
      <div
        draggable
        onDragStart={handleDragStart}
        style={style}
        className={myfn.getClassName(cls)}
        ref={draggedWindow}
      >
        <div>
          <TitleBar
            TitleRef={titleBarRef}
            maximized={isMaximized}
            resize={(shouldMaximize) => {
              setWindowFrameCoords({ x: 0, y: 0 });
              setIsMaximied(shouldMaximize);
            }}
          />
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
}
