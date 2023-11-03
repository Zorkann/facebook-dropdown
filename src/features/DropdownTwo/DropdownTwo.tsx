import Dropdown from "../../components/Dropdown";
import { Cast, ChevronRight, Box, ChevronLeft } from "react-feather";

const DropdownTwo = () => {
  return (
    <Dropdown activeMenu="X">
      <Dropdown.Menu id="X" menuType="primary">
        <Dropdown.Item>X main menu</Dropdown.Item>
        <Dropdown.Item
          leftIcon={<Cast />}
          rightIcon={<ChevronRight />}
          goToMenu="T"
        >
          T
        </Dropdown.Item>
        <Dropdown.Item leftIcon="🦧" rightIcon={<ChevronRight />} goToMenu="Y">
          Y
        </Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu menuType="secondary" id="T">
        <Dropdown.Item goToMenu="X" leftIcon={<ChevronLeft />}>
          <h2>Go to x main menu</h2>
        </Dropdown.Item>
        <Dropdown.Item leftIcon={<Box />}>T menu</Dropdown.Item>
      </Dropdown.Menu>

      <Dropdown.Menu menuType="secondary" id="Y">
        <Dropdown.Item goToMenu="X" leftIcon={<ChevronLeft />}>
          <h2>Go to x main menu</h2>
        </Dropdown.Item>
        <Dropdown.Item leftIcon="🦘">Y menu</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownTwo;
