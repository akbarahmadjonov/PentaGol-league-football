import React, { useRef, useState } from 'react';
import Header from '../../widgets/header/Header';
import article from './article.scss';
import ArticleImg from '../../shared/assets/images/articleimg.png';
import ArticleImg2 from '../../shared/assets/images/main_newSmall.png';
import LastnewsImg1  from '../../shared/assets/images/lastnewsimg1.png'
import { Link, useParams } from 'react-router-dom';

export const ArticleSinglePage = () => {
  const dataLastNews =[
    {
      id:1,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:2,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:3,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:4,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:5,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:6,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:7,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:8,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:9,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:10,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:11,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:12,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:9,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:10,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:11,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:12,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:9,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:10,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:11,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:12,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:9,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:10,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:11,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:12,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:9,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:10,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:11,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
    {
      id:12,
      img:LastnewsImg1,
      title: 'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      pr:'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      date: "12.05.2021 12:54"
  
    },
  
  ]
const {id} = useParams()
console.log(id.slice(1));

const viewAllBtnRef = useRef();

  const [viewLastAll, setviewLastAll] = useState(false);

  const handleLastViewAll = ()=>{
    setviewLastAll(true)
  }
	return (
		<>
			<Header />

			<section className='article_section'>
				<div className='container'>
					<div className='article_box'>
						<div className='article_left_box'>
							<p className='inform_datePr'>2 soat oldin</p>
							<h3 className='content_title'>
								Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga
								olib boradi: bo'g'inlar oldidagi barcha maketlar
							</h3>

							<div className='main_img'>
								<img src={ArticleImg} alt='' />
							</div>

							<p className='main_informsPr'>
								Ilon Mask (Elon Mask, Tesla va boshqa loyihalar rahbari) bir
								yarim hafta ichida ikkinchi marta Xitoyning hukmron doiralari va
								fuqarolariga murojaat qildi. Videoda u ularni ushbu mamlakatda
								biznesni rivojlantirish va kengaytirishga sarmoya kiritishga
								tayyor ekanligiga ishontirdi. Qayta ishlangan ma'lumotlarning
								xavfsizligiga alohida e'tibor qaratiladi. Ular faqat Xitoyning
								o'zida saqlanadi va shuning uchun istalgan vaqtda O'rta Qirollik
								hukumati foydalanishi mumkin bo'ladi. Ilon Mask Xitoyda hafta
								oxirida bo‘lib o‘tgan Butunjahon internet konferensiyasining
								tomoshabinlariga videomurojaati chog‘ida yangi bayonotlar berdi.
								Kompaniya Cisco Systems (Chak Robbins), Intel (Pat Gelsinger) va
								Qualcomm (Kristiano Amon) rahbarlaridan tashkil topgan bo'lib,
								Xitoy Xalq Respublikasi biznesi manfaatlarini Alibaba va Xiaomi
								rahbarlari himoya qilishgan. Tadbirni Xitoy Xalq Respublikasi
								Davlat kengashi bosh vaziri o‘rinbosari Lyu Xe ochib berdi va Si
								Szinpinning Osmon imperiyasining shaffof raqamli iqtisodiyotni
								yaratish uchun barcha kuchlar bilan ishlash istagi haqidagi
								so‘zlarini keltirdi. Yaqin kelajakda Tesla nafaqat Shanxay
								filialida elektromobillar ishlab chiqarishni kengaytiribgina
								qolmay, balki mahalliy studiya yordamida elektromobilning arzon
								modelini (narxi 25 000 dollardan kam) ishlab chiqmoqchi. Xitoy
								Xalq Respublikasida yig‘ilgan Tesla Model Y va Model 3
								elektromobillari allaqachon Yevropaga eksport qilinmoqda.
							</p>
              <div className="main_line"></div>
						</div>
						<div className='article_right_box'>
							<div className='article_right-contents'>
								<h4>Asosiy</h4>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
								</div>
							</div>
							<div className='article_right-contents right_news2'>
								<h4>Asosiy</h4>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
									<div className='line'></div>
								</div>
								<div className='right_content'>
									<p>
										Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
										topildi
									</p>
									<span>12.05.2021 12:54</span>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>

          {/* Last news section started */}
          <section className="leatestNews_section">
        <div className="container">
          <div className="leatestNews_box">
            <div className="last_news">
              <span>So'ngi yangiliklar</span>
            </div>
      {
        dataLastNews.length ? (      dataLastNews.length > 12  && viewLastAll ?  ( 
           <div className="leatestNews_card_box">
           {dataLastNews.slice(0).map(el => 
            <Link to={`/article:`+el.id }className="leatestNews_card">
                <div className="newsCard_top">
                  <img src={el.img} alt="" />
                </div>
                <div className="newsCard_body">
                  <h4>{el.title}</h4>
                  <p>{el.pr}</p>
                  <span>{el.date}</span>
                </div>
              </Link>)}
             
            </div>):  <div className="leatestNews_card_box">
           {dataLastNews.slice(0 , 8).map(el => 
            <Link to={`/article:`+el.id }className="leatestNews_card">
                <div className="newsCard_top">
                  <img src={el.img} alt="" />
                </div>
                <div className="newsCard_body">
                  <h4>{el.title}</h4>
                  <p>{el.pr}</p>
                  <span>{el.date}</span>
                </div>
              </Link>)}
             
            </div> ) : "Yangiliklar yo'q"
  
      }
    
    <button className="viewAllBtn" ref={viewAllBtnRef} onClick={handleLastViewAll} >  Barchasi ko’rish </button>

          
          </div>
        </div>
      </section>
      {/* Last news section finished */}
		</>
	);
};
