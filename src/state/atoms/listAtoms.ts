import { atom } from "recoil";
import { IList } from "../../types";

export const listsState = atom({
  key: "listsState",
  default: [] as IList[],
});

export const currentListIdState = atom({
  key: "currentListIdState",
  default: "" as string,
});
