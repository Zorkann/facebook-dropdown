import Dropdown from "../../components/Dropdown";
import { Cast, ChevronRight, Box, ChevronLeft } from "react-feather";

const DropdownOne = () => {
  return (
    <Dropdown activeMenu="main">
      <Dropdown.Menu id="main" menuType="primary">
        <Dropdown.Item>My Profile</Dropdown.Item>
        <Dropdown.Item
          leftIcon={<Cast />}
          rightIcon={<ChevronRight />}
          goToMenu="settings"
        >
          Settings
        </Dropdown.Item>
        <Dropdown.Item
          leftIcon="🦧"
          rightIcon={<ChevronRight />}
          goToMenu="animals"
        >
          Animals
        </Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu id="settings" menuType="secondary">
        <Dropdown.Item goToMenu="main" leftIcon={<ChevronLeft />}>
          <h2>My Tutorial</h2>
        </Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>HTML</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>CSS</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>JavaScript</Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>Awesome!</Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu id="animals" menuType="secondary">
        <Dropdown.Item goToMenu="main" leftIcon={<ChevronLeft />}>
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

export default DropdownOne;
