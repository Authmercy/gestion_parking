import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./inscription.css"


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [phone, setPhone] = useState("")


    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/user/register", {
                username,
                password,
                cpassword,
                phone,
                email,

            });
            navigate("/login")
        } catch (error) {
            console.error(error);
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
                <h1>Inscription</h1>
                <div className="section">

                    <form onSubmit={handleSubmit}>


                        <div className="form"  >
                            <div className="txt_field">
                                <input
                                    type="text"
                                  
                                    name="username"
                                    id="username"
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <span></span>
                                <label>Votre Nom</label>
                            </div>


                            <div className="txt_field">
                                <input
                                    type="text"
                                   
                                    name="email"
                                    id="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />


                                <span></span>
                                <label>votre adresse mail</label>
                            </div>


                            <div className="txt_field">
                                <input
                                    type="text"
                                    
                                    name="phone"
                                    id="phone"
                                    onChange={(event) => setPhone(event.target.value)}
                                />


                                <span></span><label>votre numero de telephone</label>
                            </div>
                            <div className="txt_field">
                                <input
                                    type="password"
                                  
                                    name="password"
                                    id="password"

                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <label>votre mot de passe</label>
                            </div>
                            <div className="txt_field">
                                <input
                                    type="password"
                                  
                                    name="cpassword"
                                    id="cpassword"
                                    onChange={(event) => setCPassword(event.target.value)}
                                />
                                <span></span>
                                <label>confirmer le mot de passe</label>
                            </div>
                            <input type="submit" value=" S'inscrire" />
                            <div className="signup_link">
                                Vous avez deja un compte ? <a href="/login">Connecter vous !</a>

                                </div>   </div>
                    </form >

                </div>
            </div >
        </div >

    )
};
export default Register