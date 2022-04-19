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

  const toggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.bookmark === !user.bookmark;
        }
      })
    );
  };

  return (
    <div>
      <SearchStatus users={users} />
      {users.length !== 0 ? (
        <Users
          key={users._id}
          users={users}
          onDelete={onDelete}
          toggleBookmark={toggleBookmark}
        />
      ) : null}
    </div>
  );
};

export default App;
