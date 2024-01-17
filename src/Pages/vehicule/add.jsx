import "./add.css"

import "../home/home.scss"
import React, { useState } from "react";
import axios from "axios";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {
    FaTh,
    FaBars,
   
    FaShoppingBag,
 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const AddVehicule = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/client",
            name:"Client",
            icon:<PersonOutlineIcon />
        },
        {
            path:"/ZoneParking",
            name:"ZoneParking",
            icon:<StoreIcon />
        },
        {
            path:"/contrat",
            name:"Contrat",
            icon:<CreditCardIcon />
        },
        {
            path:"/vehicule",
            name:"Vehicule",
            icon:<LocalShippingIcon/>
        },
        {
            path:"/login",
            name:"Deconnexion",
            icon:<ExitToAppIcon/>
        }
    ]
    const [search, setSearch] = useState("");
    const [marque, setmarque] = useState("");
    const [model, setmodel ] = useState("");
    const [taille,settaille ] = useState("");
    const [immatriculation, setimmatriculation ] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8000/api/vehicule/add", {
            marque,
            model,
            taille,
            immatriculation

        });
        alert("Le Vehicule ajouté avec success");
      } catch (error) {
        console.error(error);
      }
    };
  
  
  
  
 


    return (


        <div className="home">
            <div className="homeContainer">
                <div className="container-xxl px-md-5 bg-white shadow-lg" >
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-7 border-bottom">

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li >

                                Bienvenue

                            </li>

                        </ul>

                        
                        
                    </header>
                </div> 
                <div className="container">
                <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ParkApp</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
                <main>
         


      
                <div className="modal-fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Ajouter un  Vehicule</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Marque</label>
                                        <input name="marque" id="marque" type="text"
                                        onChange={(event) => setmarque(event.target.value)} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Model</label>
                                        <input  name="model" id="model" type="name"
                                        onChange={(event) => setmodel(event.target.value)} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Immatriculation</label>
                                        <input  name="immatriculation" id="immatriculation" type="name"onChange={(event) => setimmatriculation(event.target.value)} className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Taille</label>
                                        <input  name="taille" id="taille" type="name"
                                        onChange={(event) => settaille(event.target.value)} className="form-control" required />
                                    </div>
                                    
                
                                </div>
                                <div className="modal-footer">
                                <a href="/Vehicule" type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"  >Cancel</a>
                                    <button   type="submit"  className="btn btn-success" >Ajouter </button> 
                                </div>
                                </form>
                        </div>
                    </div>
                </div></main>
            </div ></div>
        </div>
    );




}; export default AddVehicule;