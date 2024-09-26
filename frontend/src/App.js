import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./UserAuthContext/useUserContext";
import ProtectedRoute from "./ProtectedRoute";
import Profiles from "./Components/Profiles/Profiles";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Logins/Login";
import SignUp from "./Components/Logins/SignUp";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="app">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }>
              <Route index element={<Profiles />} />
              <Route path="profile" element={<Profile />} />
              <Route path="navbar" element={<NavBar />} />

              <Route path="sidebar" element={<SideBar />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
