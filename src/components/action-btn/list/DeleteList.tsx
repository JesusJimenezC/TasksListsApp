import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { ITodo } from "../../../types";
import { todoItemsState } from "../../../state/atoms/todoAtoms.ts";
import { useDeleteList } from "../../../hooks/lists/useDeleteList.ts";
import { useDeleteTodo } from "../../../hooks/todos/useDeleteTodo.ts";

interface IDeleteBtnProps {
  listId: string;
}

export default function DeleteList(props: IDeleteBtnProps) {
  const { listId } = props;
  const todoItems = useRecoilValue(todoItemsState);
  const deleteList = useDeleteList();
  const deleteTodo = useDeleteTodo();

  const handleDelete = () => {
    todoItems.map((todo: ITodo) => {
      if (todo.listId === listId) {
        deleteTodo.mutate(todo.id);
      }
    });
    deleteList.mutate(listId);
  };

  return (
    <Button onClick={handleDelete} ml="2" colorScheme="red">
      <RiDeleteBin5Line />
    </Button>
  );
}
