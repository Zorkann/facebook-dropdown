import { FC, ReactNode } from "react";
import styles from "./DropdownItem.module.css";
import IconButton from "../../IconButton";
import { ActiveMenuType } from "../DropdownMenu";

type DropdownItemProps = {
  goToMenu?: ActiveMenuType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  handleOnClick?: (goToMenu: ActiveMenuType) => void;
};

const DropdownItem: FC<DropdownItemProps> = ({
  children,
  leftIcon,
  rightIcon,
  goToMenu,
  handleOnClick,
}) => {
  const onItemClick = () => {
    if (goToMenu && handleOnClick) {
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
