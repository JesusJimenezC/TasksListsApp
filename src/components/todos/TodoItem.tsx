import {
  Flex,
  Heading,
  HStack,
  ListItem,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { ITodo } from "../../types";
import ResizeTextarea from "react-textarea-autosize";
import EditTodo from "../action-btn/todo/EditTodo.tsx";
import DeleteTodo from "../action-btn/todo/DeleteTodo.tsx";
import UpdateCompletedTodo from "../action-btn/todo/UpdateCompletedTodo.tsx";

interface ITodoItemProps {
  todo: ITodo;
}

export default function TodoItem(props: ITodoItemProps) {
  const { todo } = props;

  return (
    <ListItem
      bg={useColorModeValue("white", "gray.800")}
      p="5"
      borderRadius="sm"
    >
      <Heading
        size="md"
        color={useColorModeValue("gray.500", "gray.300")}
        as="h4"
      >
        <HStack>
          <Text as={todo.completed ? "s" : undefined}>{todo.title}</Text>
          {!todo.completed && <EditTodo todo={todo} />}
          <Spacer />
          <Text
            fontSize="sm"
            as={todo.completed ? "s" : undefined}
            color={todo.completed ? "gray.400" : "gray.600"}
          >
            {String(todo.date)}
          </Text>
        </HStack>
      </Heading>
      <Textarea
        isReadOnly
        variant="unstyled"
        color={useColorModeValue("gray.700", "gray.100")}
        mt="4"
        value={todo.description}
        minH="unset"
        as={ResizeTextarea}
        resize="none"
        overflow="hidden"
        isDisabled={todo.completed}
      />
      <Flex mt="3">
        <UpdateCompletedTodo id={todo.id} completed={todo.completed} />
        <Spacer />
        <DeleteTodo id={todo.id} />
      </Flex>
    </ListItem>
  );
}
