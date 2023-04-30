import React from "react";
import style from "./style.scss";
import Logo from "../../shared/assets/images/logo.svg";
import DarkMode from "../../shared/assets/images/dark-mode.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="imageWrapper">
            <div>
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
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

export default Header