import {
  createTodo,
  deleteTodo,
  updateCompletedTodo,
  updateDescriptionTodo,
} from "../api/todoListsAPI.ts";
import { useMutation } from "@tanstack/react-query";

interface CreateTodo {
  listId: string;
  title: string;
  description: string;
}

interface UpdateCompletedTodo {
  id: string;
  completed: boolean;
}

interface UpdateDescTodo {
  id: string;
  title: string;
  description: string;
}

export const useDeleteTodoMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
  });
};

export const useUpdateCompletedTodoMutation = () => {
  return useMutation({
    mutationFn: ({ id, completed }: UpdateCompletedTodo) =>
      updateCompletedTodo(id, completed),
  });
};

export const useCreateTodoMutation = () => {
  return useMutation({
    mutationFn: ({ listId, title, description }: CreateTodo) =>
      createTodo(listId, title, description),
  });
};

export const useUpdateDescTodoMutation = () => {
  return useMutation({
    mutationFn: ({ id, title, description }: UpdateDescTodo) =>
      updateDescriptionTodo(id, title, description),
  });
};
