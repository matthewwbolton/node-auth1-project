import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../axiosWithAuth/axiosWithAuth";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axiosWithAuth
      .get("/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return <div></div>;
};

export default Users;
