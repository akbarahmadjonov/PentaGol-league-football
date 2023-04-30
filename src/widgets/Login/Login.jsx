import { useRef } from "react";
import "./login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {

   const navigate = useNavigate()
  const firstRef = useRef();
  const pasRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios
      .post("https://reqres.in/api/register", {
        email: firstRef.current.value,
        password: pasRef.current.value,
      })
      .then((data) => {
        if (data.status === 200) {
            console.log(data);
            (()=>navigate("/admin"))()
          localStorage.setItem("token", data.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginPage">
      <div className="container ">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" ref={firstRef} name required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" ref={pasRef} name required />
              <label>Password</label>
            </div>
            <div className="btns_box">

            <button type="submit" className="sendBtn">
              <span />
              <span />
              <span />
              <span />
              Submit
            </button>
             
             <Link  className="myLink" to="/">
              go to register
             </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};