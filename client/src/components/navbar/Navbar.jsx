import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`navbar ${isScrolled && "scrolled"}`}>
      <div className="navbar-container">
        <div className="navbar-container-left">
          <img className="navbar-img" src="logo.jpg" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className="navbar-container-right">
          <SearchIcon className="navbar-icon" />
          <NotificationsIcon className="navbar-icon" />
          <img className="navbar-img" src="avatar.jpg" alt="" />
          <div className="navbar-profile">
            <ArrowDropDownIcon className="navbar-icon" />
            <div className="navbar-profile-options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
