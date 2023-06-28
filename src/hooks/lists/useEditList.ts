import { useMutation } from "@tanstack/react-query";
import { updateList } from "../../api/todoListsAPI.ts";
import { useSetRecoilState } from "recoil";
import { listsState } from "../../state/atoms/listAtoms.ts";
import { IList } from "../../types";

interface IEditList {
  id: string;
  listName: string;
}

export const useEditList = () => {
  const setLists = useSetRecoilState(listsState);

  const handleSetLists = (list: IList) => {
    setLists((oldLists: IList[]) =>
      oldLists.map((oldList: IList) =>
        oldList.id === list.id ? list : oldList
      )
    );
  };

  return useMutation({
    mutationFn: ({ id, listName }: IEditList) => updateList(id, listName),
    onSuccess: (list: IList) => handleSetLists(list),
  });
};
