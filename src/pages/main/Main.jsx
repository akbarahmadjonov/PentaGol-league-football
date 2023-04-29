import React from "react";
import Header from "../../widgets/header/Header";
import main from './main.scss'
import ComandMark from "../../shared/assets/images/barsa_marker.png"

import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header /> 
      
      <section className="newsTable">
 <div className="container ">
 <div className="newsTable_box">

  <div className="newContents">
<div className="newContents_mainCard">
<div className="newContents_mainCard-content">
<h3>Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga olib boradi: bo'g'inlar oldidagi barcha maketlar</h3>
<p > 2 soat oldin</p>
</div>
</div>
<div className="newContents_cards_box">
<div className="newContents_card newContents_cardBg1">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>
<div className="newContents_card newContents_cardBg2">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>
<div className="newContents_card newContents_cardBg3">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>

<div className="newContents_card newContents_cardBg4">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>

<div className="newContents_card newContents_cardBg5">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>

<div className="newContents_card newContents_cardBg6">
<div className="newContents_card_contents">
<p>Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi</p>
<span>3 soat oldin</span>
</div>
</div>


</div>
  </div>
  <div className="comandTable">
<h4 className="tabale_title">Jadval</h4>

<select  id="tableSelect">
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
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>

  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
    <td>15</td>
    <td>14</td>
  </tr>
  <tr>
    <td>1</td>
    <td className="Comand_name"> <img src={ComandMark} alt="" /> <span>Barcelona</span> </td>
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
            <div className="last_news"> <span>
            So'ngi yangiliklar 
            </span> </div>
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
