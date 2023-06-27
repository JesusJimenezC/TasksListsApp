import { atom } from "recoil";
import { ITodo } from "../../types";

export const todoItemsState = atom({
  key: "todoItemsState",
  default: [] as ITodo[],
});
