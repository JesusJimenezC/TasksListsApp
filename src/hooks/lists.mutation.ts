import { useMutation } from "@tanstack/react-query";
import { createList, deleteList, updateList } from "../api/todoListsAPI.ts";

interface UpdateList {
  id: string;
  listName: string;
}

export const useCreateListMutation = () => {
  return useMutation({
    mutationFn: (listName: string) => createList(listName),
  });
};

export const useDeleteListMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteList(id),
  });
};

export const useUpdateListMutation = () => {
  return useMutation({
    mutationFn: ({ id, listName }: UpdateList) => updateList(id, listName),
  });
};
