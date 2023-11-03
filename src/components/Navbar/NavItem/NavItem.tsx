import { FC, ReactNode, useState, useRef, useCallback } from "react";
import styles from "./NavItem.module.css";
import IconButton from "../../IconButton";
import { useOnClickOutside } from "../../../hooks/useClickOutside";

export type NavItemProps = {
  icon: ReactNode;
  children?: ReactNode
};

const NavItem: FC<NavItemProps> = ({ children, icon }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // const onOutsideClick = useCallback(() => {
  //   setOpen(false);
  // }, []);

  // useOnClickOutside(ref, onOutsideClick);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <li className={styles.navItem} ref={ref}>
      <IconButton onClick={toggleOpen}>{icon}</IconButton>
      {open && children}
    </li>
  );
};

export default NavItem;
