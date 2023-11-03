import "./index.css";
import { Bell, Battery, Cpu, ChevronDown } from "react-feather";
import Navbar from "./components/Navbar";
import DropdownOne from "./features/DropdownOne";
import DropdownTwo from "./features/DropdownTwo";

function App() {
  return (
    <Navbar>
      <Navbar.Item icon={<Battery />} />
      <Navbar.Item icon={<Bell />} />
      <Navbar.Item icon={<Cpu />}>
        <DropdownTwo />
      </Navbar.Item>
      <Navbar.Item icon={<ChevronDown />}>
        <DropdownOne />
      </Navbar.Item>
    </Navbar>
  );
}

export default App;