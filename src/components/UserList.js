import React from "react";
import defaultAvatar from "../Assets/user.png";

const UserList = ({ data, userDetails, handleClick }) => {
  return (
    <div className="me-5">
      <div className="list-group rounded-top user-heading fw-semibold text-left border-0 d-flex mx-auto justify-content-center align-items-center">
        Users List
      </div>
      <div className="list-group align-items-center">
        {data.map((user) => (
          <div
            key={user.id}
            className={`list-group-item list-group-item-action mb-3 rounded-1 user-style fw-semibold text-left border-0 d-flex align-items-center ${
              userDetails.id === user.id ? "selected" : ""
            }`}
            onClick={() => handleClick(user)}
          >
            <div>
              <img
                src={user.avatar || defaultAvatar} // Use defaultAvatar if user.avatar is not available
                alt=""
                className="user-image"
              />
            </div>
            <div>{`${user.profile.firstName} ${user.profile.lastName}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
