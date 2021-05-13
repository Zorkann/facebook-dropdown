import { CSSTransition } from "react-transition-group";
import styles from "./DropdownMenu.module.css";
import { FC } from "react";
import { useDropdown } from "../hooks/useDropdown";

type DropdownMenuProps = {
  menuType: "primary" | "secondary";
  id: string;
};

const Menu: FC<DropdownMenuProps> = ({ children, id, menuType }) => {
  const { activeMenu, setMenuHeight } = useDropdown();
  return (
    <CSSTransition
      in={activeMenu === id}
      timeout={500}
      classNames={{
        enter: styles["menu_" + menuType + "_Enter"],
        enterActive: styles["menu_" + menuType + "_EnterActive"],
        exit: styles["menu_" + menuType + "_Exit"],
        exitActive: styles["menu_" + menuType + "_ExitActive"],
      }}
      unmountOnExit
      onEnter={setMenuHeight}
    >
      <div className={styles.menu}>{children}</div>
    </CSSTransition>
  );
};

export default Menu;
