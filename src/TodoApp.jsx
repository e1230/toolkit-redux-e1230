import React from "react";
import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //const { data = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data, isLoading } = useGetTodoByIdQuery(todoId);
  return (
    <>
      <h1>Todos RTK - Query</h1>
      <hr />
      {isLoading ? <h4>is Loading </h4> : <div></div>}

      <pre>{JSON.stringify(data)}</pre>
      {/* <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}

      <button
        onClick={() => {
          setTodoId(todoId - 1);
        }}
      >
        prev ToDo
      </button>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
        }}
      >
        next ToDo
      </button>
    </>
  );
};
