import React from "react";
import "../../App.css";
import { useUserAuth } from "../../UserAuthContext/useUserContext";
import MainProfile from "./MainProfile";

function Profile() {
  const { user } = useUserAuth();
  return (
    <div className="profilePage">
      <MainProfile user={user} />
    </div>
  );
}

export default Profile;
