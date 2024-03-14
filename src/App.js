import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
// import defaultAvatar from "./Assets/user.png";
import "./styles/Style.css";

function App() {
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setData(response.data);
        setUserDetails(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleClick = (user) => {
    setUserDetails(user);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="App d-flex justify-content-center">
      <UserList
        data={data}
        userDetails={userDetails}
        handleClick={handleClick}
      />
      {userDetails.avatar && <UserDetails userDetails={userDetails} />}
    </div>
  );
}

export default App;
