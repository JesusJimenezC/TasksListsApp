import { useMutation } from "@tanstack/react-query";
import { ITodo } from "../../types";
import { updateTodo } from "../../api/todoListsAPI.ts";
import { useSetRecoilState } from "recoil";
import { todoItemsState } from "../../state/atoms/todoAtoms.ts";

export const useEditTodo = () => {
  const setTodoItems = useSetRecoilState(todoItemsState);

  return useMutation({
    mutationFn: (todo: ITodo) => updateTodo(todo),
    onSuccess: (todo: ITodo) =>
      setTodoItems((oldTodo: ITodo[]) =>
        oldTodo.map((oldTodo: ITodo) =>
          oldTodo.id === todo.id ? todo : oldTodo
        )
      ),
  });
};
