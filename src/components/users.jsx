import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import searchStatus from "./searchStatus";
import Qualities from "./qualities";
import User from "./user";

const Users = (props) => {
  const { name, _id, users } = props;

  //   const count = props.users.length;

  //   const deleteUser = (id) => {
  //     setUsers(users.filter((user) => user._id !== id));
  //   };

  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <User key={user._id} user={user} onDelete={props.onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

//   );
// };

export default Users;
