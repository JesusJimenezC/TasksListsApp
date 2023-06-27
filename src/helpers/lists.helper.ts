import { SetterOrUpdater } from "recoil";
import { IList } from "../types";

export const setCreatedList = (
  list: IList,
  setter: SetterOrUpdater<IList[]>
) => {
  setter((oldLists: IList[]) => {
    return [list, ...oldLists];
  });
};

export const setDeletedList = (
  listId: string,
  setter: SetterOrUpdater<IList[]>
) => {
  setter((oldLists: IList[]) => {
    return oldLists.filter((list: IList) => list.id !== listId);
  });
};

export const setUpdatedList = (
  list: IList,
  setter: SetterOrUpdater<IList[]>
) => {
  setter((oldLists: IList[]) => {
    return oldLists.map((oldList: IList) => {
      if (oldList.id === list.id) {
        return list;
      }
      return oldList;
    });
  });
};
