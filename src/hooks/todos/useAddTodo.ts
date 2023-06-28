import { useMutation } from "@tanstack/react-query";
import { createTodo } from "../../api/todoListsAPI.ts";
import { useSetRecoilState } from "recoil";
import { todoItemsState } from "../../state/atoms/todoAtoms.ts";
import { ITodo } from "../../types";

interface IAddTodo {
  id: string;
  title: string;
  description: string;
}

export const useAddTodo = () => {
  const setTodoItems = useSetRecoilState(todoItemsState);

  return useMutation({
    mutationFn: ({ id, title, description }: IAddTodo) =>
      createTodo(id, title, description),
    onSuccess: (todo: ITodo) =>
      setTodoItems((oldTodo: ITodo[]) => [todo, ...oldTodo]),
  });
};
