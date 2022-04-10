import { ReactNode, useReducer, createContext } from "react";
import {
  Action,
  AppState,
  gameReducer,
  initialState,
} from "../reducers/gameReducer";

interface Props {
  children: ReactNode;
}

interface IGameContext extends AppState {
  dispatchGame: ((action: Action) => void) | (() => void);
}

export const GameContext = createContext<IGameContext>({
  ...initialState,
  dispatchGame: () => null,
});

export const GameContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ ...state, dispatchGame: dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
