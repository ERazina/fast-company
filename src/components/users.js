import React from "react";
import api from "../api";

const Users = () => {
  //   const api = api.users.fetchAll();
  console.log(api.users.fetchAll());
  return <h1 id="app">Users</h1>;
};

export default Users;
