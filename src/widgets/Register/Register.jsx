import { useRef } from "react";
import "./register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export const Register = () => {
  const firstNRef = useRef();
  const lastNRef = useRef();
  const emailRef = useRef();
  const pasRef = useRef();
  const navigate = useNavigate()
  const handleSubmit = (evt) => {
 evt.preventDefault()
    axios
      .post("https://reqres.in/api/register", {
        firstName: firstNRef.current.value,
        lastName: lastNRef.current.value,
        email: emailRef.current.value,
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
    <div className="registerPage">
      <div className="container ">
        <div className="login-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input type="text" ref={firstNRef} />
              <label>First name</label>
            </div>
            <div className="user-box">
              <input type="text" ref={lastNRef} />
              <label>Last name</label>
            </div>
            <div className="user-box">
              <input type="email" defaultValue="eve.holt@reqres.in" ref={emailRef} />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="password" defaultValue="pistol" ref={pasRef} />
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
             
             <Link  className="myLink" to="/login">
            go to  login
             </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};