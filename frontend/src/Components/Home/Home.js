import React from "react";
import { useUserAuth } from "../../UserAuthContext/useUserContext";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      {" "}
      <NavBar handleLogout={handleLogout} user={user} />
      <SideBar />
      <main className="Main">
        {" "}
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
