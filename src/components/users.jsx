import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import searchStatus from "./searchStatus";
import Qualities from "./qualities";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { FilterList } from "./filterList";
import api from "../api";

const Users = (props) => {
  const { name, _id, users } = props;
  const amountOfPages = 4;
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions] = useState(api.professions.fetchAll());

  const handlePageChange = (pageIndex) => {
    console.log("handle page change ", pageIndex);
    setCurrentPage(pageIndex);
  };

  console.log(professions);

  const userCrop = paginate(users, currentPage, amountOfPages);

  const handleProfessionSelect = (params) => {
    console.log(params);
  };

  return (
    <div>
      <FilterList items={professions} onItemSelect={handleProfessionSelect} />
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
          {userCrop.map((user) => (
            <User
              key={user._id}
              user={user}
              onDelete={props.onDelete}
              toggleBookmark={props.toggleBookmark}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        amountOfPages={amountOfPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

//   );
// };

export default Users;
