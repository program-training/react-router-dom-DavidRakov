// pages/UserDetails.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { UserInterface } from "../interfaces/userInterface";
import { Button, Typography } from "@mui/material";

const UserDetails = () => {
  const { id } = useParams();

  const [userDetails, setUserDetails] = useState<UserInterface>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<UserInterface>(`https://jsonplaceholder.typicode.com/users/${id!}`)
      .then((response) => setUserDetails(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!userDetails) return <div className="load">Loading...</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3">User Details</Typography>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
      <Button
        className="ButtonElement"
        variant="contained"
        onClick={() =>
          navigate(`/users/${userDetails.id}/todos/${userDetails.id}`)
        }
      >
        for todo list
      </Button>
      <Outlet />
      <hr />
    </div>
  );
};

export default UserDetails;
