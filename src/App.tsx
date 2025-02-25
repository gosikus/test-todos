import React, { useState } from 'react';
import './App.scss';
import './assets/styles/normalize.scss';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';
import { ITodo } from './common/types';
import { TodosContext, ActiveTodosContext } from './common/context';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [left, setLeft] = useState(0);

  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.isDone;
    if (filter === 'completed') return todo.isDone;
  });

  const handleFilterClick = (newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
  };

  const clearHandler = () => {
    const updatedTodos = todos.filter((todo) => {
      if (todo.isDone === false) return true;
    });
    setTodos(updatedTodos)
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <ActiveTodosContext.Provider value={{ left, setLeft }}>
        <div className="todo-app">
          <h1 className="todo-app__title">Todo</h1>
          <div className="todo-app__container">
            <p className="todo-app__items-left">{left} items left</p>
            <div className="todo-app__filters">
              <button
                className={`todo-app__filter-button ${
                  filter === 'all' ? 'todo-app__filter-button--active' : ''
                }`}
                onClick={() => handleFilterClick('all')}>
                All
              </button>
              <button
                className={`todo-app__filter-button ${
                  filter === 'active' ? 'todo-app__filter-button--active' : ''
                }`}
                onClick={() => handleFilterClick('active')}>
                Active
              </button>
              <button
                className={`todo-app__filter-button ${
                  filter === 'completed' ? 'todo-app__filter-button--active' : ''
                }`}
                onClick={() => handleFilterClick('completed')}>
                Completed
              </button>
            </div>
            <button className="todo-app__clear-button" onClick={clearHandler}>
              Clear completed
            </button>
          </div>
          <div className="todo-app__wrapper">
            <TodoForm />
            <TodoList todos={filteredTodos} />
          </div>
        </div>
      </ActiveTodosContext.Provider>
    </TodosContext.Provider>
  );
}

export default App;
