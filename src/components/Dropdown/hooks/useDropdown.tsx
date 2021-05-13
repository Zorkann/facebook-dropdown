import { useCallback, useContext } from "react";
import { DropdownContext } from "../Dropdown";

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error("useDropdown must be used within a Dropdown component");
  }
  const {
    state: { activeMenu },
    dispatch,
  } = context;

  const handleOnClick = useCallback(
    (goToMenu: string) => {
      dispatch({ type: "SET_ACTIVE_MENU", payload: goToMenu });
    },
    [dispatch]
  );

  const setMenuHeight = useCallback(
    ({ offsetHeight }: { offsetHeight: number }) => {
      dispatch({ type: "SET_MENU_HEIGHT", payload: offsetHeight });
    },
    [dispatch]
  );

  return { activeMenu, handleOnClick, setMenuHeight };
};
