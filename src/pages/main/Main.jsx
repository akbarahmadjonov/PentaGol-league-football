import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../widgets/header/Header";
import { Footer } from "../../widgets/footer/footer";
import styles from "./style.module.scss";
import Frame from "../../shared/assets/images/frame.svg";
import Frame2 from "../../shared/assets/images/frame2.svg";
import Frame3 from "../../shared/assets/images/frame3.svg";
import Frame4 from "../../shared/assets/images/frame4.svg";
import Frame5 from "../../shared/assets/images/frame5.svg";
import FcbLogo from "../../shared/assets/images/commands/fcb.svg";
import LiverpoolLogo from "../../shared/assets/images/commands/liverpool.svg";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import main from "./main.scss";
import ComandMark from "../../shared/assets/images/barsa_marker.png";
import LastnewsImg1 from "../../shared/assets/images/lastnewsimg1.png";
import Logo from "../../shared/assets/images/logo.svg";
import DarkMode from "../../shared/assets/images/dark-mode.svg";

const dataLastNews = [
  {
    id: 1,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 2,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 3,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 4,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 5,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 6,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 7,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 8,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 9,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 10,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 11,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 12,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 9,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 10,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 11,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 12,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 9,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 10,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 11,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 12,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 9,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 10,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 11,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 12,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 9,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 10,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 11,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
  {
    id: 12,
    img: LastnewsImg1,
    title:
      'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    pr: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
    date: "12.05.2021 12:54",
  },
];

// get news start

const GetNews = async () =>{
  const data = await axios.get("http://10.10.0.43:2005/news " );
  console.log("getNews",data.data);
  if (data.status === 200) {
    console.log(data);
  }else{
    console.log(data);
  }
}
GetNews()
// get news start

const Main = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [LastnNews, setLastnNews] = useState([]);
  const [viewAll, setviewAll] = useState(false);
  const [viewLastAll, setviewLastAll] = useState(false);
  const viewAllBtnRef = useRef();
  const [theme, setTheme] = useState("light");

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleLastViewAll = () => {
    setviewLastAll(true);
  };
  const handleViewAll = () => {
    setviewAll(true);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className="header">
        <div className="container">
          <div className="imageWrapper">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <button onClick={toggleTheme}>
                <img src={DarkMode} alt="Dark mode" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs filters */}
      <div className="container">
        <section className={styles.news}>
          <div
            className={`${
              theme === "light" ? styles.matchWrapper : styles.matchWrapperDark
            }`}
          >
            <div className={styles.buttonsWrapper}>
              <button
                className={
                  activeButton === 0 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(0)}
              >
                <img src={Frame} alt="Frame img" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Italiya. Seriya A
                </span>
              </button>
              <button
                className={
                  activeButton === 1
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(1)}
              >
                <img src={Frame2} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Premier Liga
                </span>
              </button>
              <button
                className={
                  activeButton === 2
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(2)}
              >
                <img src={Frame3} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  LaLiga
                </span>
              </button>
              <button
                className={
                  activeButton === 3
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(3)}
              >
                <img src={Frame4} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Bundesliga
                </span>
              </button>
              <button
                className={
                  activeButton === 4
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(4)}
              >
                <img src={Frame5} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Ligue 1
                </span>
              </button>
            </div>
          </div>
          {/* Match resuls */}
          <div className={styles.matchHeading}>
            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>
          </div>
          {/* Last Week */}
          <div
            className={`${
              theme === "light" ? styles.matchWrapper : styles.matchWrapperDark
            }`}
          >
            <div className={styles.buttonsWrapper}>
              <button
                className={
                  activeButton === 5 ? styles.activeBtn : styles.button
                }
                onClick={() => handleButtonClick(5)}
              >
                <img src={Frame} alt="Frame img" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Italiya. Seriya A
                </span>
              </button>
              <button
                className={
                  activeButton === 6
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(6)}
              >
                <img src={Frame2} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Premier Liga
                </span>
              </button>
              <button
                className={
                  activeButton === 7
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(7)}
              >
                <img src={Frame3} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  LaLiga
                </span>
              </button>
              <button
                className={
                  activeButton === 8
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(8)}
              >
                <img src={Frame4} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Bundesliga
                </span>
              </button>
              <button
                className={
                  activeButton === 9
                    ? styles.activeBtn
                    : styles.button && theme === "light"
                    ? styles.button
                    : styles.buttonDark
                }
                onClick={() => handleButtonClick(9)}
              >
                <img src={Frame5} alt="logo" />
                <span
                  className={`${
                    theme === "light" ? styles.buttonColor : styles.buttonDark
                  }`}
                >
                  Ligue 1
                </span>
              </button>
            </div>
          </div>
          <div className={styles.matchHeading}>
            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>

            <div className={styles.matchResultWrapper}>
              <div
                className={`${
                  theme === "light"
                    ? styles.matchCommandsWrapper
                    : styles.matchCommandsWrapperDark
                }`}
              >
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
              <span
                className={`${
                  theme === "light" ? styles.matchDate : styles.matchDateDark
                } `}
              >
                11.11.2021 <span className={styles.matchTime}>23:59</span>
              </span>
            </div>
          </div>
        </section>
      </div>
      {/* News Table section started */}

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
            <div
              className={`${
                theme === "light" ? "comandTable" : "comandTableDark"
              }`}
            >
              <h4
                className={`${
                  theme === "light" ? "tabale_title" : "tabale_titleDark"
                }`}
              >
                Jadval
              </h4>

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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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

                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
                <tr className={`${theme === "light" ? "tr" : "tr2"}`}>
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
      {/* News Table section finished */}

      {/* Last news section started */}
      <section className="leatestNews_section">
        <div className="container">
          <div className="leatestNews_box">
            <div className="last_news">
              <span>So'ngi yangiliklar</span>
            </div>
            {dataLastNews.length ? (
              dataLastNews.length > 20 && viewLastAll ? (
                <div className="leatestNews_card_box">
                  {dataLastNews.slice(0).map((el) => (
                    <Link to={`/article:` + el.id} className="leatestNews_card">
                      <div className="newsCard_top">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="newsCard_body">
                        <h4>{el.title}</h4>
                        <p>{el.pr}</p>
                        <span>{el.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="leatestNews_card_box">
                  {dataLastNews.slice(0, 20).map((el) => (
                    <Link to={`/article:` + el.id} className="leatestNews_card">
                      <div className="newsCard_top">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="newsCard_body">
                        <h4>{el.title}</h4>
                        <p>{el.pr}</p>
                        <span>{el.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              "Yangiliklar yo'q"
            )}

            <button
              className="viewAllBtn"
              ref={viewAllBtnRef}
              onClick={handleLastViewAll}
            >
              {" "}
              Barchasi ko’rish{" "}
            </button>
          </div>
        </div>
      </section>
      {/* Last news section finished */}
      {/*All news section started */}
      <section className="allNews_section ">
        <div className="container">
          <div className="leatestNews_box">
            <div className="last_news">
              <span>Barcha yangiliklar</span>
            </div>
            {dataLastNews.length ? (
              dataLastNews.length > 12 && viewAll ? (
                <div className="leatestNews_card_box">
                  {dataLastNews.slice(0).map((el) => (
                    <Link to={`/article:` + el.id} className="leatestNews_card">
                      <div className="newsCard_top">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="newsCard_body">
                        <h4>{el.title}</h4>
                        <p>{el.pr}</p>
                        <span>{el.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="leatestNews_card_box">
                  {dataLastNews.slice(0, 12).map((el) => (
                    <Link to={`/article:` + el.id} className="leatestNews_card">
                      <div className="newsCard_top">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="newsCard_body">
                        <h4>{el.title}</h4>
                        <p>{el.pr}</p>
                        <span>{el.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              "Yangiliklar yo'q"
            )}

            <button
              className="viewAllBtn"
              ref={viewAllBtnRef}
              onClick={handleViewAll}
            >
              {" "}
              Barchasi ko’rish{" "}
            </button>
          </div>
        </div>
      </section>
      {/*All news section finished */}
      <Footer />
    </div>
  );
};

export default Main;
