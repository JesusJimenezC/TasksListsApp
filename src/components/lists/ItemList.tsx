import { Button, Flex, ListItem, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/router";
import DeleteList from "../action-btn/list/DeleteList.tsx";
import { EditList } from "../action-btn/list/EditList.tsx";

interface ITodoItemListProps {
  listId: string;
  listName: string;
}

export default function ItemList(props: ITodoItemListProps) {
  const { listName, listId } = props;
  const navigate = useNavigate({ from: "/" });

  return (
    <ListItem>
      <Flex direction="row">
        <Button
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          px="4"
          py="2"
          borderRadius="sm"
          w="full"
          _hover={{
            bg: useColorModeValue("whiteAlpha.900", "whiteAlpha.500"),
          }}
          onClick={() => navigate({ to: "/list/$listId", params: { listId } })}
        >
          {listName}
        </Button>
        <EditList listName={listName} listId={listId} />
        <DeleteList listId={listId} />
      </Flex>
    </ListItem>
  );
}
