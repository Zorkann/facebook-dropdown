import { useReducer, useCallback } from "react";

type State = {
  menuHeight?: number;
  activeMenu?: string;
};

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

type UseDropdownProps = {
  menuHeight?: number;
  activeMenu: string;
};

export const useDropdown = ({
  menuHeight = undefined,
  activeMenu,
}: UseDropdownProps) => {
  const [state, dispatch] = useReducer(reducer, {
    menuHeight,
    activeMenu,
  });

  const setMenuHeight = useCallback(
    ({ offsetHeight }: { offsetHeight: number }) => {
      dispatch({ type: "SET_MENU_HEIGHT", payload: offsetHeight });
    },
    [dispatch]
  );

  const handleOnClick = useCallback(
    (goToMenu: string) => {
      dispatch({ type: "SET_ACTIVE_MENU", payload: goToMenu });
    },
    [dispatch]
  );

  return { ...state, setMenuHeight, handleOnClick };
};
