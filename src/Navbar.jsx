import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ handleCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("politics");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    handleCategoryChange(category);
    setActiveCategory(category); // Set active category
    setIsOpen(false); // Close the menu after selecting a category
  };

  return (
    <nav className="navbar">
      <h1 className="logo">NewsWave</h1>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li className={`nav-link ${activeCategory === "politics" ? "active" : ""}`} onClick={() => handleCategoryClick("politics")}>Politics</li>
        <li className={`nav-link ${activeCategory === "technology" ? "active" : ""}`} onClick={() => handleCategoryClick("technology")}>Technology</li>
        <li className={`nav-link ${activeCategory === "business" ? "active" : ""}`} onClick={() => handleCategoryClick("business")}>Business</li>
        <li className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`} onClick={() => handleCategoryClick("entertainment")}>Entertainment</li>
        <li className={`nav-link ${activeCategory === "health" ? "active" : ""}`} onClick={() => handleCategoryClick("health")}>Health</li>
        <li className={`nav-link ${activeCategory === "science" ? "active" : ""}`} onClick={() => handleCategoryClick("science")}>Science</li>
        <li className={`nav-link ${activeCategory === "sports" ? "active" : ""}`} onClick={() => handleCategoryClick("sports")}>Sports</li>
      </ul>
    </nav>
  );
};

export default Navbar;
