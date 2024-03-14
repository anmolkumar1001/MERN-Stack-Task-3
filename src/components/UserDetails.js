import React from "react";
import defaultAvatar from "../Assets/user.png";

const UserDetails = ({ userDetails }) => {
  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <div className="list-group rounded-top user-heading fw-semibold text-left border-0 d-flex mx-auto justify-content-center align-items-center">
        Users Details
      </div>
      <img
        src={userDetails.avatar ? userDetails.avatar : defaultAvatar}
        alt=""
        className="details-img-margin"
      />
      <p className="fw-semibold fs-4 mt-4">@{userDetails?.profile?.username}</p>
      <div className="mb-3 w-100 mx-auto d-flex align-items-center flex-column">
        <div>
          <div>
            {
              <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
                {userDetails?.Bio ? userDetails?.Bio : "No Data Available"}
              </p>
            }
          </div>
        </div>
        <div>
          <label className="form-label fw-semibold mt-5">Full Name</label>
          <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
            {`${userDetails?.profile?.firstName || ""} ${
              userDetails?.profile?.lastName || ""
            }`}
          </p>
        </div>
        <div>
          <label className="form-label fw-semibold mt-2">Job Title</label>
          <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
            {userDetails?.jobTitle || "No Data Available"}
          </p>
        </div>
        <div>
          <label className="form-label fw-semibold mt-2">Email</label>
          <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
            {userDetails?.profile?.email || "No Data Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
