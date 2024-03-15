import React from "react";
import defaultAvatar from "../Assets/user.png";

const UserDetails = ({ userDetails }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="mb-0">User Details</h5>
            </div>
            <div className="card-body text-center">
              <img
                src={userDetails.avatar ? userDetails.avatar : defaultAvatar}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultAvatar;
                }}
                alt=""
                className="img-fluid rounded-circle mb-4"
                style={{ maxWidth: "150px" }}
              />
              <p className="fw-semibold fs-4">
                @{userDetails?.profile?.username}
              </p>
              <div className="mb-4">
                <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
                  {userDetails?.Bio ? userDetails?.Bio : "No Data Available"}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
                  {`${userDetails?.profile?.firstName || ""} ${
                    userDetails?.profile?.lastName || ""
                  }`}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Job Title</label>
                <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
                  {userDetails?.jobTitle || "No Data Available"}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <p className="form-control text-wrap user-details-box fs-5 fw-semibold border border-dark">
                  {userDetails?.profile?.email || "No Data Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
