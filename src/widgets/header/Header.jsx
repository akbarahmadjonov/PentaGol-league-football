import React, { useState } from "react";
import style from "./style.scss";
import Logo from "../../shared/assets/images/logo.svg";
import DarkMode from "../../shared/assets/images/dark-mode.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="imageWrapper">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <button>
                <img src={DarkMode} alt="Dark mode" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
