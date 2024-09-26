import React, { useEffect, useState } from "react";
import "./Profile.css";
import Users from "../Users/Users";

const Profiles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="MainContent">
      {users.map((user) => (
        <Users key={user._id} u={user} />
      ))}
    </div>
  );
};

export default Profiles;
