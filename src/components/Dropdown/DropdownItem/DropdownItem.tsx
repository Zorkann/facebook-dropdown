import { FC, ReactNode } from "react";
import styles from "./DropdownItem.module.css";
import IconButton from "../../IconButton";
import { useDropdown } from "../hooks/useDropdown";

type DropdownItemProps = {
  goToMenu?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
};

const DropdownItem: FC<DropdownItemProps> = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
}) => {
  const { handleOnClick } = useDropdown();

  const onItemClick = () => {
    if (goToMenu) {
      handleOnClick(goToMenu);
    }
  };

  return (
    <div className={styles.menuItem} onClick={onItemClick}>
      <IconButton>{leftIcon}</IconButton>
      <span>{children}</span>
      <span className={styles.iconRight}>{rightIcon}</span>
    </div>
  );
};

export default DropdownItem;
