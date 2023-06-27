import { Button, Text } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { setDeleteTodos } from "../../../helpers/todos.helper.ts";
import { useDeleteTodoMutation } from "../../../hooks/todo.mutation.ts";
import { useSetRecoilState } from "recoil";
import { todoItemsState } from "../../../state/atoms/todoAtoms.ts";

interface IDeleteTodoProps {
  id: string;
}

export default function DeleteTodo(props: IDeleteTodoProps) {
  const { id } = props;
  const setTodoItems = useSetRecoilState(todoItemsState);
  const deleteTodo = useDeleteTodoMutation();
  const handleDelete = () => {
    deleteTodo.mutateAsync(id).then(() => setDeleteTodos(id, setTodoItems));
  };

  return (
    <Button onClick={handleDelete} size="sm" colorScheme="red">
      <Text mr="2">Delete</Text>
      <RiDeleteBin5Line />
    </Button>
  );
}
