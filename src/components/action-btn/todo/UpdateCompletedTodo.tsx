import { Checkbox, Tag, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { setUpdateCompletedTodos } from "../../../helpers/todos.helper.ts";
import { useUpdateCompletedTodoMutation } from "../../../hooks/todo.mutation.ts";
import { useSetRecoilState } from "recoil";
import { todoItemsState } from "../../../state/atoms/todoAtoms.ts";

interface IUpdateTodoCompletedProps {
  id: string;
  completed: boolean;
}

export default function UpdateCompletedTodo(props: IUpdateTodoCompletedProps) {
  const { completed, id } = props;
  const [todoCompleted, setTodoCompleted] = useState(completed);
  const setTodoItems = useSetRecoilState(todoItemsState);
  const updateCompletedTodo = useUpdateCompletedTodoMutation();

  const handleTodoCompleted = async () => {
    setTodoCompleted(!todoCompleted);
    await updateCompletedTodo
      .mutateAsync({ id, completed: !todoCompleted })
      .then(() => setUpdateCompletedTodos(id, setTodoItems));
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
