import React, { useEffect, useState } from "react";


import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { getZoneParking } from "../../services/ApiService";
import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./client.css";
import {
    FaTh,
    FaBars,
   
    FaShoppingBag,
 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


import axios from "axios";

import Sidebar from "../../Components/sidebar/Sidebar";
const ZoneParking = () => {
    useEffect(() => {
        let mount = true
        getZoneParking()
        .then(res => {console.log("res from api", res)
            setZoneParkings(res)
            return() => mount = false
        })
      }, []);  

  
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
  
  
    const [ZoneParkings, setZoneParkings]=useState([])
    
    useEffect(() => {
        let mount = true
        getZoneParking()
        .then(res => {console.log("res from api", res)
            setZoneParkings(res)
            return() => mount = false
        })
      }, []);  

   
  
  
  
 


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
                                   
                                    
                                    className="form-control"
                                    placeholder="Rechercher un Client"
                                    aria-label="Search"
                                />
                            </form>
                        </div>   <a href="/addclient" className="btn btn-success" data-toggle="modal"><i className="material-icons"> &#xE147;</i> <span>Add </span></a>
                        
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
                <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label htmlFor="selectAll"></label>
                                    </span>
                                </th>
                                <th>Numero</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {ZoneParking?.map(item => {
                            return (
                            <tr>

                                <td>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                        <label htmlFor="checkbox1"></label>
                                    </span>
                                </td>


                                <td>{item.numParking}</td>
                                <td>{item.type}</td>
                              
                                <td>

                                    <a href="#editEmployeeModal-{{forloop.counter}}" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <a href="#deleteEmployeeModal-{{forloop.counter}}" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>





                                </td>
                            </tr>
  );
})}
                        </tbody>


                    </table>

               
                </main>
                    </div ></div>
        </div>

                
    );




}; 
export default ZoneParking;