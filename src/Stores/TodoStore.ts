import {create} from "zustand";
import { Todo } from "../Models/Todo";

interface TodoState {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: number) => void;
  toggleCompletedState: (id: number) => void;
}

export const useStore = create<TodoState>((set) => ({
  // initial state
  todos: [],
  // methods for manipulating state
  addTodo: (description: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Math.ceil(Math.random() * 10000),
          description,
          completed: false,
        } as Todo,
      ],
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? ({ ...todo, completed: !todo.completed } as Todo)
          : todo
      ),
    }));
  },
}));
