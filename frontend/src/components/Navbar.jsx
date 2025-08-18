import { Link } from "react-router-dom";
import "../css/Navbar.css";

// import { useState, useEffect } from "react";
// import { getPopularAnimes } from "../services/api";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">AniSpace</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home{" "}
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
