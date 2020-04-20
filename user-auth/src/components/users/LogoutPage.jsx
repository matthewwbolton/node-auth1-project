import React, { useEffect } from "react";
import axiosWithAuth from "../../axiosWithAuth/axiosWithAuth";

const LogoutPage = () => {
  useEffect(() => {
    axiosWithAuth
      .get("/api/auth/logout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>Thanks for Visting!! Please come again soon!!!</h1>
    </div>
  );
};

export default LogoutPage;
