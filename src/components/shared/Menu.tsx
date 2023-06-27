import { Divider, Flex, Spacer } from "@chakra-ui/react";
import Back from "../action-btn/Back.tsx";
import AddList from "../action-btn/list/AddList.tsx";
import AddTodo from "../action-btn/todo/AddTodo.tsx";
import { useParams } from "@tanstack/router";
import { currentListIdState } from "../../state/atoms/listAtoms.ts";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

export default function Menu() {
  const { listId } = useParams({ from: "/list" });
  const setCurrentList = useSetRecoilState(currentListIdState);

  useEffect(() => {
    if (listId) {
      setCurrentList(listId);
    }
  }, [listId]);

  return (
    <>
      <Divider borderColor="gray" />
      <Flex mt="5" minWidth="max-content" alignItems="center" gap="2">
        {listId && <Back />}
        <Spacer />
        {!listId ? <AddList /> : <AddTodo />}
      </Flex>
    </>
  );
}
