import React, { useState } from "react";
import GoogleButton from "react-google-button";
import "./Style.css";
import { Link } from "react-router-dom";
import {
  Button,
  InputLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useUserAuth } from "../../UserAuthContext/useUserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expertise, setExpertise] = useState("");
  const [industries, setIndustries] = useState("");
  const [stages, setStages] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      const user = {
        name,
        email,
        category,
        expertise,
        industries,
        stages,
        location,
        language,
      };
      fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            console.log("User registered:", data);
            navigate("/");
          }
        });
    } catch (error) {
      setError(error.message);
      window.alert(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await googleSignIn();
      fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
  };

  const handleIndustriesChange = (e) => {
    setIndustries(e.target.value);
  };

  const handleStagesChange = (e) => {
    setStages(e.target.value);
  };
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const languages = [
    "English",
    "Spanish",
    "French",
    "Mandarin",
    "Arabic",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Japanese",
    "Korean",
    "Hindi",
  ];

  const categories = [
    "Mentor",
    "Investor",
    "Co-founder",
    "Advisor",
    "Entrepreneur",
    "Developer",
    "Designer",
    "Consultant",
    "Industry Expert",
    "Thought Leader",
    "Speaker",
    "Author",
    "Researcher",
    "Strategist",
    "Innovator",
    "Business Partner",
    "Venture Capitalist",
    "Angel Investor",
    "Startup Founder",
  ];

  const expertiseOptions = [
    "Product Management",
    "AI/ML",
    "Finance",
    "Web Development",
    "Cloud Computing",
    "Cybersecurity",
    "Data Analytics",
    "DevOps",
    "Full Stack Development",
    "Mobile App Development",
    "Software Engineering",
    "UX/UI Design",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Digital Marketing",
    "Business Development",
    "Project Management",
    "Data Science",
    "Statistics",
    "Robotics",
    "Autonomous Systems",
    "Business Intelligence",
    "Graphic Design",
    "Video Production",
    "Photography",
  ];

  const industriesOptions = [
    "Tech",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Real Estate",
    "Manufacturing",
  ];
  const stagesOptions = [
    "Idea/Concept Stage",
    "Pre-seed",
    "Seed Stage",
    "Series A",
    "Series B and Beyond",
    "Growth Stage",
    "Mature Stage",
  ];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          label="your@email.com"
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
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="••••••"
          type="password"
          id="password"
          autoComplete="new-password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          helperText={error}
          color={error ? "error" : "primary"}
        />

        {/* Category Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Expertise Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="expertise-label">Expertise</InputLabel>
          <Select
            labelId="expertise-label"
            id="expertise-select"
            value={expertise}
            label="Expertise"
            onChange={handleExpertiseChange}>
            {expertiseOptions.map((expertise) => (
              <MenuItem key={expertise} value={expertise}>
                {expertise}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Industries Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="industries-label">Industries</InputLabel>
          <Select
            labelId="industries-label"
            id="industries-select"
            value={industries}
            label="Industries"
            onChange={handleIndustriesChange}>
            {industriesOptions.map((industry) => (
              <MenuItem key={industry} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Stages Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="stages-label">Stages</InputLabel>
          <Select
            labelId="stages-label"
            id="stages-select"
            value={stages}
            label="Stages"
            onChange={handleStagesChange}>
            {stagesOptions.map((stage) => (
              <MenuItem key={stage} value={stage}>
                {stage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Location TextField */}
        <TextField
          required
          fullWidth
          id="location"
          label="Location"
          name="location"
          variant="outlined"
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Language TextField */}
        <FormControl fullWidth>
          <InputLabel id="languages-label">Languages</InputLabel>
          <Select
            labelId="language-label"
            id="languages-select"
            value={language}
            label="Languages"
            onChange={handleLanguageChange}>
            {languages.map((language) => (
              <MenuItem key={language} value={language}>
                {language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
          Already have an account?
        </h5>
        <Link
          to="/login"
          style={{
            fontWeight: "600",
            textDecoration: "none",
            color: "#50b7f5",
          }}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
