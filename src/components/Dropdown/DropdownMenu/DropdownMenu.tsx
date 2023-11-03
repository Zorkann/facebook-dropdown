import { CSSTransition } from "react-transition-group";
import styles from "./DropdownMenu.module.css";
import { FC, useRef } from "react";
import { useDropdown } from "../hooks/useDropdown";

type DropdownMenuProps = {
  children: React.ReactNode;
  menuType: "primary" | "secondary";
  id: string;
};

const Menu: FC<DropdownMenuProps> = ({ children, id, menuType }) => {
  const { activeMenu, setMenuHeight } = useDropdown();
  const menuRef = useRef<HTMLDivElement>(null);
  const className = "menu_" + menuType;

  const calcMenuHeight = () => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current);
    }
  };

  return (
    <CSSTransition
      in={activeMenu === id}
      timeout={500}
      nodeRef={menuRef}
      classNames={{
        enter: styles[className + "_Enter"],
        enterActive: styles[className + "_EnterActive"],
        exit: styles[className + "_Exit"],
        exitActive: styles[className + "_ExitActive"],
      }}
      unmountOnExit
      onEnter={calcMenuHeight}
    >
      <div ref={menuRef} className={styles.menu}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default Menu;
