import React from "react";
import styles from "./footer.scss";
import Logo from "../../shared/assets/images/logo.svg";
// Social links
import TwitterLogo from "../../shared/assets/images/footer/Twitter.svg";
import YouTubeLogo from "../../shared/assets/images/footer/YouTube.svg";
import Vkontakte from "../../shared/assets/images/footer/Vkontakte (VK).svg";
import Skype from "../../shared/assets/images/footer/Skype.svg";
import Instagram from "../../shared/assets/images/footer/Instagram.svg";
import Facebook from "../../shared/assets/images/footer/Facebook.svg";
import Telegram from "../../shared/assets/images/footer/Telegram.svg";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerWrapper">
          <div className="container">
            <div className="footerFlex">
              <div className="footerInner">
                <a href="#">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="footerInner">
                <ul>
                  <li>
                    <a href="#">Main</a>
                  </li>
                  <li>
                    <a href="#">Mach center</a>
                  </li>
                  <li>
                    <a href="#">Football</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Cybersport</a>
                  </li>
                </ul>
              </div>
              <div className="footerInner">
                <ul>
                  <li>
                    <a href="#">Main</a>
                  </li>
                  <li>
                    <a href="#">Mach center</a>
                  </li>
                  <li>
                    <a href="#">Football</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Cybersport</a>
                  </li>
                </ul>
              </div>
              <div className="footerInner">
                <ul>
                  <li>
                    <a href="#">Main</a>
                  </li>
                  <li>
                    <a href="#">Mach center</a>
                  </li>
                  <li>
                    <a href="#">Football</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Cybersport</a>
                  </li>
                </ul>
              </div>
              <div className="footerInner">
                <ul className="footerLinks">
                  <li>
                    <a href="#">
                      <img src={TwitterLogo} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={YouTubeLogo} alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Vkontakte} alt="vkontakte" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Skype} alt="skype" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Instagram} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Facebook} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Telegram} alt="telegram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <small>© 2023 Footboll. All rights reserved</small>
          </div>
        </div>
      </footer>
    </>
  );
};
