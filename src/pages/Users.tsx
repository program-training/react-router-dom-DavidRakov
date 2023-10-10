import axios from "axios";
import { useEffect, useState } from "react";
import { UserInterface } from "../interfaces/userInterface";
import { Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState<UserInterface[]>();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get<UserInterface[]>("https://jsonplaceholder.typicode.com/users")
      .then((usersList) => setUsers(usersList.data))
      .catch((error) => console.log(error));
  }, []); // Add an empty dependency array

  if (!users) return <div className="load">loading....</div>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">user names</Typography>
        {users.map((user) => (
          <Button
            className="ButtonElement"
            sx={{ border: "solid", margin: "5px", width: "400px" }}
            key={user.id}
            variant="contained"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            {user.name}
            <Outlet />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Users;
