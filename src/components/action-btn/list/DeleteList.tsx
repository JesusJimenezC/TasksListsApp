import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { listsState } from "../../../state/atoms/listAtoms.ts";
import { ITodo } from "../../../types";
import { todoItemsState } from "../../../state/atoms/todoAtoms.ts";
import { useDeleteListMutation } from "../../../hooks/lists.mutation.ts";
import { useDeleteTodoMutation } from "../../../hooks/todo.mutation.ts";
import { setDeletedList } from "../../../helpers/lists.helper.ts";
import { setDeleteTodos } from "../../../helpers/todos.helper.ts";

interface IDeleteBtnProps {
  listId: string;
}

export default function DeleteList(props: IDeleteBtnProps) {
  const { listId } = props;
  const setLists = useSetRecoilState(listsState);
  const setTodo = useSetRecoilState(todoItemsState);
  const todoItems = useRecoilValue(todoItemsState);

  const deleteList = useDeleteListMutation();
  const deleteTodo = useDeleteTodoMutation();

  const handleDelete = async () => {
    todoItems.map((todo: ITodo) => {
      if (todo.listId === listId) {
        deleteTodo
          .mutateAsync(todo.id)
          .then(() => setDeleteTodos(todo.id, setTodo));
      }
    });
    deleteList.mutateAsync(listId).then(() => setDeletedList(listId, setLists));
  };

  return (
    <Button onClick={handleDelete} ml="2" colorScheme="red">
      <RiDeleteBin5Line />
    </Button>
  );
}
