import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTodos } from "../api/todoListsAPI.ts";
import { ITodo } from "../types";

export const useTodoItemsQuery = () => {
  const { isLoading, isError, error, data }: UseQueryResult = useQuery({
    queryKey: ["todoItems"],
    queryFn: getTodos,
    select: (todos: ITodo[]): ITodo[] => {
      return [...todos].reverse();
    },
  });

  return {
    isLoading,
    isError,
    error,
    todoItems: data as ITodo[],
  };
};
