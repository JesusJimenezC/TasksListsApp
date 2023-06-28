import { Button, Text } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDeleteTodo } from "../../../hooks/todos/useDeleteTodo.ts";

interface IDeleteTodoProps {
  id: string;
}

export default function DeleteTodo(props: IDeleteTodoProps) {
  const { id } = props;
  const deleteTodo = useDeleteTodo();
  const handleDelete = () => {
    deleteTodo.mutate(id);
  };

  return (
    <Button onClick={handleDelete} size="sm" colorScheme="red">
      <Text mr="2">Delete</Text>
      <RiDeleteBin5Line />
    </Button>
  );
}
