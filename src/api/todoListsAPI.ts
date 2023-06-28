import axios from "axios";
import short from "short-uuid";

interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: Date;
  listId: string;
}

const URL = "http://localhost:3000";

// --------------LISTS API----------------

const todoListsAPI = axios.create({
  baseURL: `${URL}/todoLists`,
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
  await todoListsAPI.delete(`/${id}`);
  return id;
};

export const updateList = async (id: string, listName: string) => {
  const response = await todoListsAPI.patch(`/${id}`, {
    listName,
  });
  return response.data;
};

// --------------TODOS API----------------

const todosItemApi = axios.create({
  baseURL: `${URL}/todos`,
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
  await todosItemApi.delete(`/${id}`);
  return id;
};

export const updateTodo = async (todo: ITodo) => {
  const response = await todosItemApi.patch(`/${todo.id}`, {
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  });
  return response.data;
};
