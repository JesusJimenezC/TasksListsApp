export interface IList {
  id: string;
  listName: string;
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: Date;
  listId: string;
}
