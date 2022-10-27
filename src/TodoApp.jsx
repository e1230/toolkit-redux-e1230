import React from "react";
import { useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const { data = [], isLoading } = useGetTodosQuery();
  return (
    <>
      <h1>Todos RTK - Query</h1>
      <hr />
      {isLoading ? <h4>is Loading </h4> : <div></div>}

      <pre>...</pre>

      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button>next ToDo</button>
    </>
  );
};
