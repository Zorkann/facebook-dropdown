import { FC, ReactNode, useState } from "react";
import styles from "./NavItem.module.css";
import IconButton from "../../IconButton";

export type NavItemProps = {
  icon: ReactNode;
};

const NavItem: FC<NavItemProps> = ({ children, icon }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <li className={styles.navItem}>
      <IconButton onClick={toggleOpen}>{icon}</IconButton>
      {open && children}
    </li>
  );
};

export default NavItem;
