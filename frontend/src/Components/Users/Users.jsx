import React from "react";
import "./Users.css";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

const Users = ({ u }) => {
  const {
    name,
    email,
    category,
    expertise,
    industries,
    stages,
    location,
    language,
  } = u;

  return (
    <Card
      className="Profile"
      style={{ margin: "20px", maxWidth: "600px", borderRadius: "10px" }}>
      <CardContent>
        <div
          className="ProfilePic"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}>
          <Avatar style={{ width: "80px", height: "80px" }} />
        </div>
        <div className="Profile__Body">
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", textAlign: "center" }}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ textAlign: "center" }}>
            {email}
          </Typography>

          <div className="Profile__Details" style={{ marginTop: "20px" }}>
            <Typography variant="body1">
              <strong>Category:</strong> {category}
            </Typography>
            <Typography variant="body1">
              <strong>Expertise:</strong> {expertise}
            </Typography>
            <Typography variant="body1">
              <strong>Industries:</strong> {industries}
            </Typography>
            <Typography variant="body1">
              <strong>Stages:</strong> {stages}
            </Typography>
            <Typography variant="body1">
              <strong>Location:</strong> {location}
            </Typography>
            <Typography variant="body1">
              <strong>Language:</strong> {language}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Users;
