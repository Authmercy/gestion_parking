import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./login.css"


const Login = () => {
    const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
    });
  
    const { loading, error, dispatch } = useContext(AuthContext);
  
    const navigate = useNavigate()
  
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("http://localhost:8000/api/user/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/home")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    };
  

  return (

    <div className="body">
      <div className="slogan">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
           <span> Parking Management</span>
        </a>
      </div>

      <div className="center">
      <h1>Connexion</h1>
        <div className="section">
     

          <form>


            <div className="form"  >
       
           
        <div className="txt_field">
              <input
                type="text"
               
                name="email"
                id="email"
                onChange={handleChange}
              />


<span></span>
          <label>Email</label>
        </div>

            
           

        <div className="txt_field">
          
              <input
                type="password"
               
                name="password"
                id="password"
               
                onChange={handleChange}
              /></div>
<span></span>
          
          </div>
          <div className="pass">Mot de pass oublié?</div>
          <input disabled={loading} onClick={handleClick}  type="submit" value="Login"/>
        <div className="signup_link">
          Pas de compte?<a href="/inscription">Inscrivez vous</a>
        </div>
      </form>
    </div>
    
      </div>
    </div >
 
    
  );
};
export default Login