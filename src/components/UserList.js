import React from "react";
import defaultAvatar from "../Assets/user.png";

const UserList = ({ data, userDetails, handleClick }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="mb-0">Users List</h5>
            </div>
            <div className="card-body">
              {data.map((user) => (
                <div
                  key={user.id}
                  className={`list-group-item list-group-item-action mb-3 rounded-1 user-style fw-semibold text-left border-0 d-flex align-items-center ${
                    userDetails.id === user.id ? "selected" : ""
                  }`}
                  onClick={() => handleClick(user)}
                >
                  <div className="user-avatar">
                    <img
                      src={user.avatar || defaultAvatar}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultAvatar;
                      }}
                      alt=""
                      className="user-image img-fluid rounded-circle"
                    />
                  </div>
                  <div className="user-details ms-3">
                    <h6 className="mb-0">
                      {`${user.profile.firstName} ${user.profile.lastName}`}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
