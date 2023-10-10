import { useEffect, useState } from "react";
import { TodoInterface } from "../interfaces/todoInterface";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { Stack, Typography } from "@mui/material";

const TodoDetails = () => {
  const [todo, setTodo] = useState<TodoInterface | null>(null);
  const { taskId } = useParams();
  console.log(taskId);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${taskId!}`)
      .then((list) => setTodo(list.data as TodoInterface))
      .catch((error) => console.error(error));
  }, [taskId]);

  if (!todo) return <div className="load">loading...</div>;
  return (
    <Stack>
      <Typography variant="h3">Task Details</Typography>
      <p>Task Title: {todo.title}</p>
      <p>Task ID: {todo.id}</p>
      <p>Completed: {todo.completed.toString()}</p>
      <Outlet />
    </Stack>
  );
};
export default TodoDetails;
