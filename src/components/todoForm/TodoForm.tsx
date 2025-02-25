import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ITodo } from '../../common/types';
import './TodoForm.scss';
import { nanoid } from 'nanoid';
import { TodosContext, ActiveTodosContext } from '../../common/context';


const TodoForm: React.FC = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const {left, setLeft} = useContext(ActiveTodosContext)

  const { register, handleSubmit, reset } = useForm<ITodo>();

  const onSubmit = (data: ITodo) => {
    if (!data.text.trim()) {
      return;
    }

    const uniqueId = nanoid();
    setTodos((prev) => [...prev, { text: data.text, isDone: false, id: uniqueId }]);
    setLeft((left) => (left += 1));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-form">
      <label className="edit-form__label">
        <input {...register('text')} className="edit-form__input" placeholder="new todo" />
      </label>
      <button type="submit" className="edit-form__button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
