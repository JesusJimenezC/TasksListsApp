import axios from "axios";
import short from "short-uuid";

// --------------LISTS API----------------

const todoListsAPI = axios.create({
  baseURL: "http://localhost:3000/todoLists",
});

export const getLists = async () => {
  const response = await todoListsAPI.get("");
  return response.data;
};

export const createList = async (listName: string) => {
  const response = await todoListsAPI.post("", {
    id: short.generate(),
    listName,
  });
  return response.data;
};

export const deleteList = async (id: string) => {
  const response = await todoListsAPI.delete(`/${id}`);
  return response.data;
};

export const updateList = async (id: string, listName: string) => {
  const response = await todoListsAPI.patch(`/${id}`, {
    listName,
  });
  return response.data;
};

// --------------TODOS API----------------

const todosItemApi = axios.create({
  baseURL: "http://localhost:3000/todos",
});

export const getTodos = async () => {
  const response = await todosItemApi.get("");
  return response.data;
};

export const createTodo = async (
  id: string,
  title: string,
  description: string
) => {
  const response = await todosItemApi.post(`?listId=${id}`, {
    id: short.generate(),
    title,
    description,
    completed: false,
    date: String(new Date().toISOString().slice(0, 10)),
    listId: id,
  });

  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await todosItemApi.delete(`/${id}`);
  return response.data;
};

export const updateDescriptionTodo = async (
  id: string,
  title: string,
  description: string
) => {
  const response = await todosItemApi.patch(`/${id}`, {
    title,
    description,
  });
  return response.data;
};

export const updateCompletedTodo = async (id: string, completed: boolean) => {
  const response = await todosItemApi.patch(`/${id}`, {
    completed,
  });
  return response.data;
};
