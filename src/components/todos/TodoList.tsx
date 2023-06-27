import {
  Box,
  Container,
  Divider,
  Heading,
  List,
  useColorModeValue,
} from "@chakra-ui/react";
import TodoItem from "./TodoItem.tsx";
import { useRecoilValue } from "recoil";
import { ITodo } from "../../types";
import { currentListSelector } from "../../state/selectors/listSelectors.ts";
import { filteredTodosSelector } from "../../state/selectors/todoSelectors.ts";

export default function TodoList() {
  const headerColor = useColorModeValue("gray.600", "gray.400");
  const bgItemNotFound = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");

  const list = useRecoilValue(currentListSelector);
  const todoItems = useRecoilValue(filteredTodosSelector);

  return (
    <Container my="4">
      <Divider mb="3" borderColor="gray" />
      {list && (
        <Heading size="lg" color={headerColor} as="h3">
          {list.listName}
        </Heading>
      )}
      <List spacing="3" mt="6">
        {todoItems && todoItems?.length !== 0 ? (
          todoItems.map((item: ITodo) => <TodoItem todo={item} key={item.id} />)
        ) : (
          <Container>
            <Box
              borderRadius="lg"
              mt={6}
              p={3}
              textAlign="center"
              bg={bgItemNotFound}
              css={{ backdropFilter: "blur(10px)" }}
            >
              No items found. Create a new one!
            </Box>
          </Container>
        )}
      </List>
    </Container>
  );
}
