export type AppState = typeof initialState;
export type Action =
  | { type: "resetGame" }
  | { type: "createRobot" }
  | { type: "createFoo" }
  | { type: "createBar" }
  | { type: "createFoobar" }
  | { type: "moveRobot" }
  | { type: "mineFoo" }
  | { type: "mineBar" }
  | { type: "mineFoobar" };

export type ICost = null | { foo: number; bar: number; foobar: number };

export interface IResource {
  quantity: number;
  time: { min: number; max: number };
  cost: ICost;
  successRate: number;
  nbMiningRobots: number;
}

export interface IRobot extends IResource {
  nbResting: number;
  nbMoving: number;
  nbMining: number;
}

const initialState: {
  foo: IResource;
  bar: IResource;
  foobar: IResource;
  robot: IRobot;
} = {
  foo: {
    quantity: 0,
    time: { min: 1, max: 1 },
    cost: null,
    successRate: 1,
    nbMiningRobots: 0,
  },
  bar: {
    quantity: 0,
    time: { min: 0.5, max: 2 },
    cost: null,
    successRate: 1,
    nbMiningRobots: 0,
  },
  foobar: {
    quantity: 0,
    time: { min: 2, max: 2 },
    cost: { foo: 1, bar: 1, foobar: 0 },
    successRate: 0.6,
    nbMiningRobots: 0,
  },
  robot: {
    quantity: 2,
    nbResting: 2,
    nbMoving: 0,
    nbMining: 0,
    time: { min: 0, max: 0 },
    cost: { foo: 6, bar: 0, foobar: 3 },
    successRate: 1,
    nbMiningRobots: 0,
  },
};

const resourcesReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case "resetGame":
      return {
        ...initialState,
      };

    case "createRobot":
      return {
        ...state,
        robot: {
          ...state.robot,
          nbResting: state.robot.nbResting + 1,
        },
        foo: {
          ...state.foo,
          quantity: state.foo.quantity - 6,
        },
        foobar: {
          ...state.foobar,
          quantity: state.foobar.quantity - 3,
        },
      };

    case "createFoo":
      return {
        ...state,
        foo: {
          ...state.foo,
          quantity: state.foo.quantity + 1,
        },
      };

    case "createBar":
      return {
        ...state,
        bar: {
          ...state.bar,
          quantity: state.bar.quantity + 1,
        },
      };

    case "createFoobar":
      return {
        ...state,
        foobar: {
          ...state.foobar,
          quantity: state.foobar.quantity + 1,
        },
        foo: {
          ...state.foo,
          quantity: state.foo.quantity - 1,
        },
        bar: {
          ...state.bar,
          quantity: state.bar.quantity - 1,
        },
      };

    case "moveRobot":
      return {
        ...state,
        robot: {
          ...state.robot,
          nbResting: state.robot.nbResting - 1,
          nbMoving: state.robot.nbMoving + 1,
        },
      };

    case "mineFoo":
      return {
        ...state,
        robot: {
          ...state.robot,
          nbMoving: state.robot.nbMoving - 1,
          nbMining: state.robot.nbMining,
        },
        foo: {
          ...state.foo,
          nbMiningRobots: state.foo.nbMiningRobots + 1,
        },
      };

    case "mineBar":
      return {
        ...state,
        robot: {
          ...state.robot,
          nbMoving: state.robot.nbMoving - 1,
          nbMining: state.robot.nbMining,
        },
        bar: {
          ...state.bar,
          nbMiningRobots: state.bar.nbMiningRobots + 1,
        },
      };

    case "mineFoobar":
      return {
        ...state,
        robot: {
          ...state.robot,
          nbMoving: state.robot.nbMoving - 1,
          nbMining: state.robot.nbMining,
        },
        foobar: {
          ...state.foobar,
          nbMiningRobots: state.foobar.nbMiningRobots + 1,
        },
      };

    default:
      return state;
  }
};

export { initialState, resourcesReducer };
