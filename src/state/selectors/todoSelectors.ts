import { selector } from "recoil";
import { currentListIdState } from "../atoms/listAtoms.ts";
import { todoItemsState } from "../atoms/todoAtoms.ts";

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const currentListId = get(currentListIdState);
    const todos = get(todoItemsState);
    return todos.filter((todo) => todo.listId === currentListId);
  },
});
