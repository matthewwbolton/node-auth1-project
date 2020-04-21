import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../axiosWithAuth/axiosWithAuth";
import Axios from "axios";
axiosWithAuth.defaults.withCredentials = true;

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axiosWithAuth
      .get("http://localhost:5000/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return <div></div>;
};

export default Users;
