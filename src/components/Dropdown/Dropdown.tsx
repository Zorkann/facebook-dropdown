import { useEffect, useRef, FC } from "react";
import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";

type DropdownProps = {
  menuHeight?: number;
  setMenuHeight: ({ offsetHeight }: { offsetHeight: number }) => void;
};

type SubComponents = {
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
};

const Dropdown: FC<DropdownProps> & SubComponents = ({
  children,
  menuHeight = undefined,
  setMenuHeight,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      const { offsetHeight } = dropdownRef.current.firstChild as HTMLDivElement;
      setMenuHeight({ offsetHeight });
    }
  }, [setMenuHeight]);

  return (
    <div
      className={styles.dropdown}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      {children}
    </div>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
