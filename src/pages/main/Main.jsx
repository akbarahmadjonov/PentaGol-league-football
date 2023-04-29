import React, { useState } from "react";
import Header from "../../widgets/header/Header";
import styles from "./style.module.scss";
import Frame from "../../shared/assets/images/frame.svg";
import Frame2 from "../../shared/assets/images/frame2.svg";
import Frame3 from "../../shared/assets/images/frame3.svg";
import Frame4 from "../../shared/assets/images/frame4.svg";
import Frame5 from "../../shared/assets/images/frame5.svg";
import FcbLogo from "../../shared/assets/images/commands/fcb.svg";
import LiverpoolLogo from "../../shared/assets/images/commands/liverpool.svg";

const Main = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
      <Header />
      {/* Tabs filters */}
      <div className="container">
        <div className={styles.matchWrapper}>
          <div className={styles.buttonsWrapper}>
            <button
              className={activeButton === 0 ? styles.activeBtn : styles.button}
              onClick={() => handleButtonClick(0)}
            >
              <img src={Frame} alt="Frame img" />
              Italiya. Seriya A
            </button>
            <button
              className={activeButton === 1 ? styles.activeBtn : styles.button}
              onClick={() => handleButtonClick(1)}
            >
              <img src={Frame2} alt="logo" />
              Premier Liga
            </button>
            <button
              className={activeButton === 2 ? styles.activeBtn : styles.button}
              onClick={() => handleButtonClick(2)}
            >
              <img src={Frame3} alt="logo" />
              LaLiga
            </button>
            <button
              className={activeButton === 3 ? styles.activeBtn : styles.button}
              onClick={() => handleButtonClick(3)}
            >
              <img src={Frame4} alt="logo" />
              Bundesliga
            </button>
            <button
              className={activeButton === 4 ? styles.activeBtn : styles.button}
              onClick={() => handleButtonClick(4)}
            >
              <img src={Frame5} alt="logo" />
              Ligue 1
            </button>
          </div>
        </div>
        {/* Match resuls */}
        <div className={styles.matchHeading}>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
          <div className={styles.matchResultWrapper}>
            <div className={styles.matchCommandsWrapper}>
              <div className={styles.club1}>
                <img src={FcbLogo} alt="command logo" />
                <span className={styles.commandName}>Barselona</span>
              </div>
              <div className={styles.result}>
                <span className={styles.goalSet}>3</span> :{" "}
                <span className={styles.goalSet}>0</span>
              </div>
              <div className={styles.club}>
                <span className={styles.commandName}>Liverpool</span>
                <img src={LiverpoolLogo} alt="command logo" />
              </div>
            </div>
            <span className={styles.matchDate}>
              11.11.2021 <span className={styles.matchTime}>23:59</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
