import { Checkbox, Tag, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { ITodo } from "../../../types";
import { useEditTodo } from "../../../hooks/todos/useEditTodo.ts";

interface IUpdateTodoCompletedProps {
  todo: ITodo;
}

export default function UpdateCompletedTodo(props: IUpdateTodoCompletedProps) {
  const { todo } = props;
  const [todoCompleted, setTodoCompleted] = useState(todo.completed);
  const editTodo = useEditTodo();

  const handleTodoCompleted = async () => {
    setTodoCompleted(!todoCompleted);
    editTodo.mutate({ ...todo, completed: !todoCompleted });
  };

  return (
    <Checkbox
      colorScheme="blue"
      color={useColorModeValue("gray.600", "gray.500")}
      my="auto"
      isChecked={todoCompleted}
      onChange={handleTodoCompleted}
    >
      <Tag variant="solid" colorScheme={todoCompleted ? "blue" : "green"}>
        {todoCompleted ? "Completed" : "In progress"}
      </Tag>
    </Checkbox>
  );
}
