import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../axiosWithAuth/axiosWithAuth";
import Axios from "axios";
axiosWithAuth.defaults.withCredentials = true;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth
      .get("http://localhost:5000/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h4>Username: {user.username}</h4>
          <h4>Password: {user.password}</h4>
        </div>
      ))}
    </div>
  );
};

export default Users;
