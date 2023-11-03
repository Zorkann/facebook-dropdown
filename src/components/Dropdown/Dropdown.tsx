import {
  useRef,
  FC,
  createContext,
  useReducer,
  useLayoutEffect,
  ReactNode,
} from "react";
import styles from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";

type State = {
  menuHeight: number;
  activeMenu: string;
};
type Dispatch = (action: Action) => void;

type Action =
  | { type: "SET_MENU_HEIGHT"; payload: number }
  | { type: "SET_ACTIVE_MENU"; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_MENU_HEIGHT": {
      return { ...state, menuHeight: action.payload };
    }
    case "SET_ACTIVE_MENU": {
      return { ...state, activeMenu: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

type DropdownProps = {
  activeMenu: string;
  children: ReactNode;
};

type SubComponents = {
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
};

const DropdownContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const Dropdown: FC<DropdownProps> & SubComponents = ({
  children,
  activeMenu,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    menuHeight: 0,
    activeMenu,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const child = dropdownRef.current?.firstChild as HTMLDivElement | undefined;
    if (child) {
      const { offsetHeight } = child;
      dispatch({ type: "SET_MENU_HEIGHT", payload: offsetHeight });
    }
  }, []);

  return (
    <DropdownContext.Provider value={{ state, dispatch }}>
      <div
        className={styles.dropdown}
        style={{ height: state.menuHeight }}
        ref={dropdownRef}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;

export { DropdownContext };
export default Dropdown;
