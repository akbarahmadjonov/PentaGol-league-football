import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../widgets/header/Header";
import styles from "./style.module.scss";
import Frame from "../../shared/assets/images/frame.svg";
import Frame2 from "../../shared/assets/images/frame2.svg";
import Frame3 from "../../shared/assets/images/frame3.svg";
import Frame4 from "../../shared/assets/images/frame4.svg";
import Frame5 from "../../shared/assets/images/frame5.svg";
import FcbLogo from "../../shared/assets/images/commands/fcb.svg";
import LiverpoolLogo from "../../shared/assets/images/commands/liverpool.svg";

import main from "./main.scss";
import ComandMark from "../../shared/assets/images/barsa_marker.png";

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
        <section className={styles.news}>
          <div className={styles.matchWrapper}>
            <div className={styles.buttonsWrapper}>
              <button
                className={
                  activeButton === 0 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(0)}
              >
                <img src={Frame} alt="Frame img" />
                Italiya. Seriya A
              </button>
              <button
                className={
                  activeButton === 1 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(1)}
              >
                <img src={Frame2} alt="logo" />
                Premier Liga
              </button>
              <button
                className={
                  activeButton === 2 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(2)}
              >
                <img src={Frame3} alt="logo" />
                LaLiga
              </button>
              <button
                className={
                  activeButton === 3 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(3)}
              >
                <img src={Frame4} alt="logo" />
                Bundesliga
              </button>
              <button
                className={
                  activeButton === 4 ? styles.activeBtn : styles.button
                }
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
          {/* Last Week */}
          <div className={styles.matchWrapper}>
            <div className={styles.buttonsWrapper}>
              <button
                className={
                  activeButton === 5 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(5)}
              >
                <img src={Frame} alt="Frame img" />
                Italiya. Seriya A
              </button>
              <button
                className={
                  activeButton === 6 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(6)}
              >
                <img src={Frame2} alt="logo" />
                Premier Liga
              </button>
              <button
                className={
                  activeButton === 7 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(7)}
              >
                <img src={Frame3} alt="logo" />
                LaLiga
              </button>
              <button
                className={
                  activeButton === 8 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(8)}
              >
                <img src={Frame4} alt="logo" />
                Bundesliga
              </button>
              <button
                className={
                  activeButton === 9 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(9)}
              >
                <img src={Frame5} alt="logo" />
                Ligue 1
              </button>
            </div>
          </div>
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
        </section>
      </div>
      <section className="newsTable">
        <div className="container ">
          <div className="newsTable_box">
            <div className="newContents">
              <div className="newContents_mainCard">
                <div className="newContents_mainCard-content">
                  <h3>
                    Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga
                    olib boradi: bo'g'inlar oldidagi barcha maketlar
                  </h3>
                  <p> 2 soat oldin</p>
                </div>
              </div>
              <div className="newContents_cards_box">
                <div className="newContents_card newContents_cardBg1">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>
                <div className="newContents_card newContents_cardBg2">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>
                <div className="newContents_card newContents_cardBg3">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>

                <div className="newContents_card newContents_cardBg4">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>

                <div className="newContents_card newContents_cardBg5">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>

                <div className="newContents_card newContents_cardBg6">
                  <div className="newContents_card_contents">
                    <p>
                      Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                      topildi
                    </p>
                    <span>3 soat oldin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comandTable">
              <h4 className="tabale_title">Jadval</h4>

              <select id="tableSelect">
                <option value="Italiya. A seriya">Italiya. A seriya</option>
                <option value="Premier Liga">Premier Liga</option>
                <option value="LaLiga">LaLiga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Ligue 1 ">Ligue 1 </option>
              </select>
              <table>
                <tr>
                  <th> № </th>
                  <th>Команда</th>
                  <th>И</th>
                  <th>О</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="Comand_name">
                    {" "}
                    <img src={ComandMark} alt="" /> <span>Barcelona</span>{" "}
                  </td>
                  <td>15</td>
                  <td>14</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="leatestNews_section">
        <div className="container">
          <div className="leatestNews_box">
            <div className="last_news">
              {" "}
              <span>So'ngi yangiliklar</span>{" "}
            </div>
            <div className="leatestNews_card_box">
              <div className="leatestNews_card">
                <div className="newsCard_top">
                  <img src="" alt="" />
                </div>
                <div className="newsCard_body">
                  <h4></h4>
                  <p></p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
