import "./index.css";
import { Bell, Battery, Cpu, ChevronDown } from "react-feather";
import Navbar from "./components/Navbar";
import DropdownX from "./features/Dropdown";

function App() {
  return (
    <Navbar>
      <Navbar.Item icon={<Battery />} />
      <Navbar.Item icon={<Bell />} />
      <Navbar.Item icon={<Cpu />} />

      <Navbar.Item icon={<ChevronDown />}>
        <DropdownX />
      </Navbar.Item>
    </Navbar>
  );
}

export default App;
