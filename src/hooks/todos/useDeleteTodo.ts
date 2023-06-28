import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "../../api/todoListsAPI.ts";
import { useSetRecoilState } from "recoil";
import { todoItemsState } from "../../state/atoms/todoAtoms.ts";
import { ITodo } from "../../types";

export const useDeleteTodo = () => {
  const setTodo = useSetRecoilState(todoItemsState);

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: (id: string) => {
      setTodo((oldTodo: ITodo[]) => {
        return oldTodo.filter((todo: ITodo) => todo.id !== id);
      });
    },
  });
};
