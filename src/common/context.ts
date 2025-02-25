import { createContext } from 'react';
import { ITodo } from './types';

interface ITodosContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  setTodos: () => {},
});

interface IActiveTodosContext {
  left: number;
  setLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveTodosContext = createContext<IActiveTodosContext>({
  left: 0,
  setLeft: () => {},
});
