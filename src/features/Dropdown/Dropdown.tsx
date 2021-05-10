import Dropdown from "../../components/Dropdown";
import { Cast, ChevronRight, Box, ChevronLeft } from "react-feather";
import { useDropdown } from "../../hooks/useDropdown";

const DropdownX = () => {
  const { menuHeight, activeMenu, setMenuHeight, handleOnClick } = useDropdown({
    activeMenu: "main",
    menuHeight: 0,
  });

  return (
    <Dropdown menuHeight={menuHeight} setMenuHeight={setMenuHeight}>
      <Dropdown.Menu
        isMenuActive={activeMenu === "main"}
        classNames="menu-primary"
        setMenuHeight={setMenuHeight}
      >
        <Dropdown.Item>My Profile</Dropdown.Item>
        <Dropdown.Item
          leftIcon={<Cast />}
          rightIcon={<ChevronRight />}
          goToMenu="settings"
          handleOnClick={handleOnClick}
        >
          Settings
        </Dropdown.Item>
        <Dropdown.Item
          leftIcon="🦧"
          rightIcon={<ChevronRight />}
          goToMenu="animals"
          handleOnClick={handleOnClick}
        >
          Animals
        </Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu
        isMenuActive={activeMenu === "settings"}
        classNames="menu-secondary"
        setMenuHeight={setMenuHeight}
      >
        <Dropdown.Item
          goToMenu="main"
          leftIcon={<ChevronLeft />}
          handleOnClick={handleOnClick}
        >
          <h2>My Tutorial</h2>
        </Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>HTML</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>CSS</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>JavaScript</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>Awesome!</Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu
        isMenuActive={activeMenu === "animals"}
        classNames="menu-secondary"
        setMenuHeight={setMenuHeight}
      >
        <Dropdown.Item
          goToMenu="main"
          leftIcon={<ChevronLeft />}
          handleOnClick={handleOnClick}
        >
          <h2>Animals</h2>
        </Dropdown.Item>
        <Dropdown.Item leftIcon="🦘">Kangaroo</Dropdown.Item>
        <Dropdown.Item leftIcon="🐸">Frog</Dropdown.Item>
        <Dropdown.Item leftIcon="🦋">Horse?</Dropdown.Item>
        <Dropdown.Item leftIcon="🦔">Hedgehog</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownX;
