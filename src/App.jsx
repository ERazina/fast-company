import React, { useState } from "react";
import api from "./api";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const initialState = api.users.fetchAll();
  const [users, setUsers] = useState(initialState);

  const onDelete = (id) => {
    setUsers(
      users.filter((user) => {
        if (user._id !== id) {
          return users;
        }
      })
    );
  };

  return (
    <div>
      <SearchStatus users={users} />
      <Users users={users} onDelete={onDelete} />
    </div>
  );
};

export default App;
