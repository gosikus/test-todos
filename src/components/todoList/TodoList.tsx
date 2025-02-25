import React, { useContext } from 'react';
import TodoItem from '../todoItem/TodoItem';
import { ITodo } from '../../common/types';
import "./TodoList.scss"
import { TodosContext } from '../../common/context';

interface ITodoListProps {
  todos: ITodo[]
}
const TodoList: React.FC<ITodoListProps> = ({todos}) => {

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem text={todo.text} isDone={todo.isDone} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
