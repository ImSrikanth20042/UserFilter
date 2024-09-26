import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainProfile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import LockResetIcon from "@mui/icons-material/LockReset";
import EditProfile from "./EditProfile";
import axios from "axios";
import useLoggedInUser from "../../Hook/useLoggeInUser";
const MainProfile = ({ user }) => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [loggedinuser] = useLoggedInUser();
  const username = user?.email?.split("@")[0];

  const handleuploadprofileimage = (e) => {
    setisloading(true);
    const image = e.target.files[0];

    const formData = new FormData();
    formData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=5ccca74448be7fb4c1a7baebca13e0d2",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;

        const userprofileimage = {
          email: user?.email,
          profileImage: url,
        };
        setisloading(false);
        if (url) {
          fetch(`http://localhost:8000/userUpdates/${user?.email}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userprofileimage),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("done", data);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        window.alert(e);
        setisloading(false);
      });
  };

  return (
    <div>
      <ArrowBackIcon className="arrow-icon" onClick={() => navigate("/")} />
      <h4 className="heading-4">{username}</h4>
      <div className="mainprofile">
        <div className="profile-bio">
          <div className="hoverAvatarImage">
            <div className="imageIcon_tweetButton">
              <label htmlFor="profileImage" className="imageIcon">
                {isloading ? (
                  <LockResetIcon className="photoIcon photoIconDisabled" />
                ) : (
                  <CenterFocusWeakIcon className="photoIcon" />
                )}
              </label>
              <input
                type="file"
                id="profileImage"
                className="imageInput"
                onChange={handleuploadprofileimage}
              />
            </div>
          </div>
        </div>
        <div className="userInfo">
          <div>
            <h3 className="heading-3">
              {loggedinuser[0]?.name
                ? loggedinuser[0].name
                : user && user.displayname}
            </h3>
            <p className="usernameSection">@{username}</p>
          </div>
          <EditProfile user={user} loggedinuser={loggedinuser} />
        </div>
        <div className="infoContainer">
          {loggedinuser[0]?.bio ? <p>{loggedinuser[0].bio}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
