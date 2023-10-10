// pages/Todos.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { TodoInterface } from "../interfaces/todoInterface";
import { Typography } from "@mui/material";

const TodoList = () => {
  const { userId } = useParams();
  const [todos, setTodos] = useState<TodoInterface[]>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<TodoInterface[]>(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId!}`
      )
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, [userId]);

  if (!todos) return <div className="load">Loading...</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3">Todos</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {todos.map((todo) => (
          <button
            className="ButtonElement"
            key={todo.id}
            onClick={() => navigate(`/users/${userId!}/todo/${todo.id}`)}
          >
            {todo.title}
          </button>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default TodoList;
