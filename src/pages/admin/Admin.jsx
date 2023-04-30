import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../widgets/header/Header'
import { Login } from '../../widgets/Login/Login'
import { Register } from '../../widgets/Register/Register'
import admin from "./admin.scss"
export const Admin = () => {
  const localData = localStorage.getItem("token" )
const navigate = useNavigate()
  if(!localData){
(()=>navigate("/register"))()

  }
const ligaNameref = useRef();
const teamAref = useRef();
const teamBref = useRef();
const resAref = useRef();
const resBref = useRef();
const handleSubmit =(evt)=>{
  evt.preventDefault()
  console.log({
    ligaName: ligaNameref.current.value,
    name: teamAref.current.value,
  });
  // console.log( {
  //   ligaName: ligaNameref.current.value,
  //   teamA: teamAref.current.value,
  //   teamB: teamBref.current.value,
  //   resultA: resAref.current.value,
  //   resultB: resBref.current.value,
    
  // });
    axios
    .post("https://10.10.0.43:2005/team", {
      ligaName: ligaNameref.current.value,
      name: teamAref.current.value,
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
 
}
axios
.get("https://10.10.0.43:2005/team")
.then((data) => {
  console.log(data);
})
.catch((err) => console.log(err));
  return (
    <>
    <Header />

<div className="main_box">
<div className="verticalNav">

<div className="btn_wrapper">
<button className='add_game admin_btns'> Add Games </button>
</div>
<button className='add_news admin_btns'> Add News </button>
<button className='add_game admin_btns'> Add Game </button>

{/* <form action="" onSubmit={handleSubmit}>

  <input type="text" ref={ligaNameref}   />
  <input type="number" ref={teamAref}  />
  <input type="number" ref={teamBref}  />
  <input type="number" ref={resAref}  />
  <input type="number" ref={resBref}  />
  <button>send</button>
</form>

<form action="" onSubmit={handleSubmit}>

  <input type="text" ref={ligaNameref}   />
  <input type="text" ref={teamAref}  />
 
  <button>send</button>
</form> */}


</div>
<div className="main_part">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident officia praesentium veritatis deserunt. Molestiae tempora, accusamus voluptates asperiores error commodi praesentium ullam? Consectetur eius distinctio ut est voluptatibus ratione illum excepturi! Voluptatum laudantium aliquam, dolorum labore est ducimus in iusto blanditiis, enim nostrum voluptate quidem ab. Laudantium quod eligendi cum.</p>
</div>
</div>
   
   
    </>
  )
}
