
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import StoreIcon from "@mui/icons-material/Store";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import CreditCardIcon from "@mui/icons-material/CreditCard";

import { getClient } from "../../services/ApiService";


import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import React, { useState,useEffect } from "react";
import axios from "axios";
import {
    FaTh,
    FaBars,
   
    FaShoppingBag,
 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Widget = ({ type }) => {
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
                <div className="col-md-3 text-end">
                    <form method="get" action="">
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control"
                            placeholder="Rechercher un Vehicule"
                            aria-label="Search"
                        />
                    </form>
                </div>  </header>
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
              
    <div className="widget">
      
        
     
    </div></main>
</div ></div>
</div></div>
  );
};

export default Widget;
