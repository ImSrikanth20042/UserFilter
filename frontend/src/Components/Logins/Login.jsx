import React, { useState } from "react";
import "./Style.css";
import GoogleButton from "react-google-button";
import { Button, TextField } from "@mui/material";
import { useUserAuth } from "../../UserAuthContext/useUserContext";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { logIn, googleSignIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      window.alert(error.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      style={{
        marginTop: "300px",
      }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          placeholder="your@email.com"
          name="email"
          autoComplete="email"
          variant="outlined"
          error={error}
          helperText={error}
          color={error ? "error" : "primary"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="new-password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          helperText={error}
          color={error ? "error" : "primary"}
        />
        <Button type="submit" className="btn-login">
          Log In
        </Button>
      </form>
      <div className="Link" style={{ display: "flex", alignItems: "center" }}>
        <GoogleButton
          className="g-btn"
          type="light"
          onClick={handleGoogleSignIn}
        />
        <h5 style={{ margin: "0 10px", color: "white" }}>
          Don't have an account?
        </h5>
        <Link
          to="/signup"
          style={{
            fontWeight: "600",
            textDecoration: "none",
            color: "#50b7f5",
          }}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
