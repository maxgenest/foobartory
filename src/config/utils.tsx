export type ICost = null | { foo: number; bar: number; foobar: number };

export interface IResource {
  name: string;
  cost: ICost;
  time: string;
}

export const RESOURCES: IResource[] = [
  {
    name: "foo",
    cost: null,
    time: "1 seconde",
  },
  {
    name: "bar",
    cost: null,
    time: "entre 0,5 et 2 secondes",
  },
  { name: "foobar", cost: { foo: 1, bar: 1, foobar: 0 }, time: "2 secondes" },
  { name: "robot", cost: { foo: 6, bar: 0, foobar: 3 }, time: "0 seconde" },
];
