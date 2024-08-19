import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className="navigation-wrapper"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <nav className="navigation-container container">
        <div className="logo">
          <h2>
            Token <span>Tycoon</span> Territory
          </h2>
        </div>

        <button className="open-menu-btn" onClick={toggleMenu}>
          <HiOutlineMenuAlt3 />
        </button>

        <ul className={openMenu && "open-menu"}>
          <button className="close-menu-btn" onClick={toggleMenu}>
            <IoClose />
          </button>

          <li onClick={() => setOpenMenu(false)}>
            <a href="/">Home</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="/about-us">About Us</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="/characters">Character</a>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <a href="/gallery">Gallery</a>
          </li>
          {/* <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li> */}
          {/* <li>
            <a href="">Contact</a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
