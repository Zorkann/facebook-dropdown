import { CSSTransition } from "react-transition-group";
import styles from "./DropdownMenu.module.css";
import { FC } from "react";

type DropdownMenuProps = {
  isMenuActive: boolean;
  classNames?: string;
  setMenuHeight?: (el: HTMLElement) => void;
};

const Menu: FC<DropdownMenuProps> = ({
  children,
  isMenuActive,
  classNames,
  setMenuHeight,
}) => {
  return (
    <CSSTransition
      in={isMenuActive}
      timeout={500}
      classNames={classNames}
      unmountOnExit
      onEnter={setMenuHeight}
    >
      <div className={styles.menu}>{children}</div>
    </CSSTransition>
  );
};

export default Menu;
