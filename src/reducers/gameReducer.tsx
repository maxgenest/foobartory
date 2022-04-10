export type AppState = typeof initialState;
export type Action =
  | { type: "resetGame" }
  | { type: "addRobots"; nbNewRobots: number }
  | { type: "addFreeRobots"; nbNewFreeRobots: number }
  | { type: "addFoos"; nbNewFoos: number }
  | { type: "addBars"; nbNewBars: number }
  | { type: "addFoobars"; nbNewFoobars: number }
  | { type: "removeFreeRobots"; nbRmFreeRobots: number }
  | { type: "removeFoos"; nbRmFoos: number }
  | { type: "removeBars"; nbRmBars: number }
  | { type: "removeFoobars"; nbRmFoobars: number };

const initialState = {
  nbRobots: 2,
  nbFreeRobots: 2,
  nbFoos: 0,
  nbBars: 0,
  nbFoobars: 0,
};

const gameReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case "resetGame":
      return {
        ...state,
        nbRobots: 2,
        nbFreeRobots: 2,
        nbFoos: 0,
        nbBars: 0,
        nbFoobars: 0,
      };

    case "addRobots":
      return { ...state, nbRobots: state.nbRobots + action.nbNewRobots };
    case "addFreeRobots":
      return {
        ...state,
        nbFreeRobots: state.nbFreeRobots + action.nbNewFreeRobots,
      };
    case "addFoos":
      return { ...state, nbFoos: state.nbFoos + action.nbNewFoos };
    case "addBars":
      return { ...state, nbBars: state.nbBars + action.nbNewBars };
    case "addFoobars":
      return { ...state, nbFoobars: state.nbFoobars + action.nbNewFoobars };

    case "removeFreeRobots":
      return {
        ...state,
        nbFreeRobots: state.nbFreeRobots - action.nbRmFreeRobots,
      };
    case "removeFoos":
      return { ...state, nbFoos: state.nbFoos - action.nbRmFoos };
    case "removeBars":
      return { ...state, nbBars: state.nbBars - action.nbRmBars };
    case "removeFoobars":
      return { ...state, nbFoobars: state.nbFoobars - action.nbRmFoobars };
    default:
      return state;
  }
};

export { initialState, gameReducer };
