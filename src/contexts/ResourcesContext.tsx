import { ReactNode, useReducer, createContext } from "react";
import {
  Action,
  AppState,
  resourcesReducer,
  initialState,
} from "../reducers/resourcesRducer";

interface Props {
  children: ReactNode;
}

interface IResourcesContext extends AppState {
  dispatchResource: ((action: Action) => void) | (() => void);
}

export const ResourcesContext = createContext<IResourcesContext>({
  ...initialState,
  dispatchResource: () => null,
});

export const ResourcesContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(resourcesReducer, initialState);

  return (
    <ResourcesContext.Provider value={{ ...state, dispatchResource: dispatch }}>
      {children}
    </ResourcesContext.Provider>
  );
};
