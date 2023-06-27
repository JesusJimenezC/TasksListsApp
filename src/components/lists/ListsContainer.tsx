import { Box, Divider, List } from "@chakra-ui/react";
import ItemList from "./ItemList.tsx";
import { IList } from "../../types";
import { useRecoilValue } from "recoil";
import { listsState } from "../../state/atoms/listAtoms.ts";

export default function ListsContainer() {
  const lists = useRecoilValue(listsState);

  return (
    <Box mt="4">
      <Divider mb="3" borderColor="gray" />
      <List spacing="3">
        {lists &&
          lists.map((list: IList) => (
            <ItemList key={list.id} listId={list.id} listName={list.listName} />
          ))}
      </List>
    </Box>
  );
}
