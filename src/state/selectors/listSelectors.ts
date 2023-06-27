import { selector } from "recoil";
import { currentListIdState, listsState } from "../atoms/listAtoms.ts";

export const currentListSelector = selector({
  key: "currentListSelector",
  get: ({ get }) => {
    const currentListId = get(currentListIdState);
    const lists = get(listsState);
    return lists.find((list) => list.id === currentListId);
  },
});
