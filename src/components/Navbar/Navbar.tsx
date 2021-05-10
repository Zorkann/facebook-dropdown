import { FC } from "react";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";

interface SubComponents {
  Item: typeof NavItem;
}

const Navbar: FC & SubComponents = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{children}</ul>
    </nav>
  );
};

Navbar.Item = NavItem;

export default Navbar;
