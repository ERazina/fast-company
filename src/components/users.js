import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  //   const api = api.users.fetchAll();
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length;

  const res = users.filter((user) => user._id !== "67rdca3eeb7f6fgeed471815");

  const countColor = () => {
    if (count !== 0) {
      return "badge bg-primary";
    } else {
      console.log(count);
      return "badge bg-danger";
    }
  };

  const verbCount = () => {
    if (count === 1) {
      return "человек";
    } else if (count > 1 && count < 5) {
      return "человека";
    } else {
      return "человек";
    }
  };

  const getQualityColor = (quality) => {
    if (quality === "Алкоголик") {
      return "badge bg-danger m-1";
    }
    if (quality === "Неуверенный") {
      return "badge bg-dark  m-1";
    }
    if (quality === "Нудила") {
      return "badge bg-primary  m-1";
    }
    if (quality === "Троль") {
      return "badge bg-success  m-1";
    }
    if (quality === "Странный") {
      return "badge bg-secondary  m-1";
    }
    if (quality === "Красавчик") {
      return "badge bg-warning  m-1";
    }
  };

  const deleteUser = (id) => {
    console.log(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <>
      {users.length === 0 ? (
        <span className={countColor()}>никто не тусанет с тобой сегодня</span>
      ) : (
        <>
          <span className={countColor()}>
            {count} {verbCount()} тусанут с тобой сегодня
          </span>
          <table className="table table-hover table-responsive">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td className="primary">
                      {user.qualities.map((quality) => {
                        return (
                          <span
                            className={getQualityColor(quality.name)}
                            key={quality._id}
                          >
                            {quality.name}
                          </span>
                        );
                      })}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(id) => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Users;
