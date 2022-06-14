import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import searchStatus from "./searchStatus";
// import Qualities from "./qualities";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { FilterList } from "./filterList";
import api from "../api";
import propTypes from "prop-types";

const Users = (props) => {
  const { users } = props;
  const amountOfPages = 4;
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data);
    });
  }, []);

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

Users.propTypes = {
  // name: PropTypes.string.isRequired,
  // _id: PropTypes.number.isRequired,
  users: propTypes.any,
  onDelete: propTypes.func,
  toggleBookmark: propTypes.func,
};

export default Users;
