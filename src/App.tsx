import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          top: "0px",
          padding: "12px",
          boxSizing: "border-box",
          gap: "12px",
          width: "100vw",
        }}
      >
        <Link to={"/products"}>products</Link>
        <Link to={"/users"}>users</Link>
        <Link to={"/"}>main page</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
