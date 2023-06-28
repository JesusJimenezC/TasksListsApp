import { useMutation } from "@tanstack/react-query";
import { deleteList } from "../../api/todoListsAPI.ts";
import { useSetRecoilState } from "recoil";
import { listsState } from "../../state/atoms/listAtoms.ts";
import { IList } from "../../types";

export const useDeleteList = () => {
  const setLists = useSetRecoilState(listsState);

  return useMutation({
    mutationFn: (id: string) => deleteList(id),
    onSuccess: (id: string) => {
      setLists((oldLists: IList[]) => {
        return oldLists.filter((list: IList) => list.id !== id);
      });
    },
  });
};
