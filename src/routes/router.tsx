import { Routes, Route } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import PageNotFound from "../pages/PageNotFound";
import TodoList from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import Products from "../pages/Products";
import { Home } from "../pages/Home";
import ErrorComponent from "../pages/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorComponent />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />}>
          <Route path="todos/:userId" element={<TodoList />} />
          <Route path="todo/:taskId" element={<TodoDetails />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
