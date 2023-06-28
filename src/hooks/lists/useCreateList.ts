import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { listsState } from "../../state/atoms/listAtoms.ts";
import { IList } from "../../types";
import { createList } from "../../api/todoListsAPI.ts";

export const useCreateList = () => {
  const setLists = useSetRecoilState(listsState);

  return useMutation({
    mutationFn: (listName: string) => createList(listName),
    onSuccess: (list: IList) => {
      setLists((oldLists: IList[]) => [list, ...oldLists]);
    },
  });
};
