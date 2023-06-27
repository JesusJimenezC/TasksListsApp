import { Outlet, RootRoute, Route, Router } from "@tanstack/router";
import TodoList from "../components/todos/TodoList.tsx";
import ListsContainer from "../components/lists/ListsContainer.tsx";
import Menu from "../components/shared/Menu.tsx";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Menu />
      <Outlet />
    </>
  ),
});

// TODO: Add CollectionPage routes
const todoCollectionRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ListsContainer,
});

// TODO: Add ListPage routes
const todoListRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "list",
});

const todoListByIdRoute = new Route({
  getParentRoute: () => todoListRoute,
  path: "$listId",
  component: TodoList,
});

// TODO: Define routeTree
const routeTree = rootRoute.addChildren([
  todoCollectionRoute,
  todoListRoute.addChildren([todoListByIdRoute]),
]);

export const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
