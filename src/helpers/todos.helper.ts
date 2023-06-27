import { SetterOrUpdater } from "recoil";
import { ITodo } from "../types";

export const setUpdateCompletedTodos = (
  id: string,
  setter: SetterOrUpdater<ITodo[]>
) => {
  setter((oldTodoItems: ITodo[]) =>
    oldTodoItems.map((todo: ITodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
};

export const setDeleteTodos = (
  id: string,
  setter: SetterOrUpdater<ITodo[]>
) => {
  setter((oldTodoItems: ITodo[]) =>
    oldTodoItems.filter((todo: ITodo) => todo.id !== id)
  );
};

export const setCreateTodo = (
  todo: ITodo,
  setter: SetterOrUpdater<ITodo[]>
) => {
  setter((oldTodoItems: ITodo[]) => [...oldTodoItems, todo]);
};

export const setUpdateDescTodo = (
  id: string,
  title: string,
  description: string,
  setter: SetterOrUpdater<ITodo[]>
) => {
  setter((oldTodos: ITodo[]) => {
    return oldTodos.map((todoItem: ITodo) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          title,
          description,
        };
      }
      return todoItem;
    });
  });
};
