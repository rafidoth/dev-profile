import React from 'react';
import styles from './Btn.module.scss';
export default function Btn({
  buttonText,
  buttonWidth,
  buttonHoverColor
}: {
  buttonText: string,
  buttonWidth: string,
  buttonHoverColor: { color: string, background: string }
}) {

  const [isHovered, setIsHovered] = React.useState(false);

  return <div
    style={{
      width: `${buttonWidth}px`,
      color: `#${isHovered ? buttonHoverColor.color : "fff"}`,
      background: `${isHovered ? buttonHoverColor.background : "rgba(255, 255, 255, 0.1)"
        }`,
    }}
    className={styles.btn}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {buttonText}
  </div>
}
