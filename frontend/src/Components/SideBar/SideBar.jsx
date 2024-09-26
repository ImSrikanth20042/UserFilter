import React, { useState } from "react";
import "./SideBar.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SideBar = () => {
  const [category, setCategory] = useState("");
  const [expertise, setExpertise] = useState("");
  const [industries, setIndustries] = useState("");
  const [stages, setStages] = useState("");
  const [languages, setLanguages] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleIndustriesChange = (event) => {
    setIndustries(event.target.value);
  };

  const handleStagesChange = (event) => {
    setStages(event.target.value);
  };

  const handleLanguagesChange = (event) => {
    setLanguages(event.target.value);
  };
  const languageOptions = [
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
    <div className="Sidebar">
      <div className="Filter">
        <div className="Filter-components">
          {/* Category Dropdown */}
          <FormControl fullWidth className="Dropdown">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Expertise Dropdown */}
          <FormControl fullWidth className="Dropdown">
            <InputLabel id="expertise-label">Expertise</InputLabel>
            <Select
              labelId="expertise-label"
              id="expertise-select"
              value={expertise}
              onChange={handleExpertiseChange}>
              {expertiseOptions.map((expert) => (
                <MenuItem key={expert} value={expert}>
                  {expert}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Industries Dropdown */}
          <FormControl fullWidth className="Dropdown">
            <InputLabel id="industries-label">Industries</InputLabel>
            <Select
              labelId="industries-label"
              id="industries-select"
              value={industries}
              onChange={handleIndustriesChange}>
              {industriesOptions.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Stages Dropdown */}
          <FormControl fullWidth className="Dropdown">
            <InputLabel id="stages-label">Stages</InputLabel>
            <Select
              labelId="stages-label"
              id="stages-select"
              value={stages}
              onChange={handleStagesChange}>
              {stagesOptions.map((stage) => (
                <MenuItem key={stage} value={stage}>
                  {stage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Languages Dropdown */}
          <FormControl fullWidth className="Dropdown">
            <InputLabel id="languages-label">Languages</InputLabel>
            <Select
              labelId="languages-label"
              id="languages-select"
              value={languages}
              onChange={handleLanguagesChange}>
              {languageOptions.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
