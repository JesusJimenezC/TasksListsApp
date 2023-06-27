import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getLists } from "../api/todoListsAPI.ts";
import { IList } from "../types";

export const useTodoListsQuery = () => {
  const { isLoading, isError, error, data }: UseQueryResult = useQuery({
    queryKey: ["todoLists"],
    queryFn: getLists,
    select: (lists: IList[]): IList[] => {
      return [...lists].reverse();
    },
  });

  return {
    isLoading,
    isError,
    error,
    todoLists: data as IList[],
  };
};
