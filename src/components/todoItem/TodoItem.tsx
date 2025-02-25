import React, { useContext } from 'react';
import { ITodo } from '../../common/types';
import './TodoItem.scss';
import { TodosContext, ActiveTodosContext } from '../../common/context';

const TodoItem: React.FC<ITodo> = ({ text, isDone, id }) => {
  const { todos, setTodos } = useContext(TodosContext);
  const { left, setLeft } = useContext(ActiveTodosContext);

  const checkboxHandler = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)),
    );
    setLeft((left) => (left -= 1));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={`${id}`}
        className="todo-item__checkbox"
        checked={isDone}
        onChange={() => checkboxHandler()}
      />
      <label className="todo-item__label">
        <p className="todo-item__text" id={`${id}`}>
          {text}
        </p>
      </label>
      <button className="todo-item__button todo-item__button--edit">Edit</button>
    </div>
  );
};

export default TodoItem;
