import { useEffect, useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

const STORAGE_KEY = "todoapp.todos";

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedTodos = window.localStorage.getItem(STORAGE_KEY);
    if (!savedTodos) {
      return [];
    }

    try {
      return JSON.parse(savedTodos);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const completedTodos = todos.filter((todo) => todo.done).length
  const totalTodos = todos.length


  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} /> 
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>

    </div>
  );
}
