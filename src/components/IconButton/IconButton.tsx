import { FC } from "react";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  onClick?: (...args: any) => void;
};

const IconButton: FC<IconButtonProps> = ({ children: Icon, onClick }) => {
  return (
    <div className={styles.iconButton} onClick={onClick}>
      {Icon}
    </div>
  );
};

export default IconButton;
