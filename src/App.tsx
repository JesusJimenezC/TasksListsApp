import { ReactElement, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Header from "./components/shared/Header.tsx";
import { RouterProvider } from "@tanstack/router";
import { router } from "./router/MainRouter.tsx";
import { listsState } from "./state/atoms/listAtoms.ts";
import { ITodo, IList } from "./types";
import { useSetRecoilState } from "recoil";
import { useTodoListsQuery } from "./hooks/lists.query.ts";
import { useTodoItemsQuery } from "./hooks/todo.query.ts";
import { todoItemsState } from "./state/atoms/todoAtoms.ts";

export default function App(): ReactElement {
  const setLists = useSetRecoilState(listsState);
  const setTodoItems = useSetRecoilState(todoItemsState);

  const { todoLists } = useTodoListsQuery();
  const { todoItems } = useTodoItemsQuery();

  useEffect(() => {
    if (todoLists) {
      setLists(todoLists as IList[]);
    }
  }, [todoLists]);

  useEffect(() => {
    if (todoItems) {
      setTodoItems(todoItems as ITodo[]);
    }
  }, [todoItems]);

  return (
    <Container>
      <Header />
      <RouterProvider router={router} />
    </Container>
  );
}
