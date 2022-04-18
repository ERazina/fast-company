import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Qualities from "./qualities";
import Bookmarks from "./bookmarks";

const User = (props) => {
  const { user } = props;

  console.log("USER", props);

  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td className="primary">
        <Qualities qualities={user.qualities} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmarks
          bookmark={user.bookmark}
          toggleBookmark={props.toggleBookmark}
          user={props.user}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
