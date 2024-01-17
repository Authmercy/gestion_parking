import "./Vehicule.css"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { getClient } from "../../services/ApiService";
import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "../home/home.scss"
import React, { useState,useEffect } from "react";
import axios from "axios";
import {
    FaTh,
    FaBars,
   
    FaShoppingBag,
 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { getVehicule } from "../../services/ApiService";


const Vehicule = () => {
    const [search, setSearch] = useState("");
    
    const [Vehicule, setVehicule] = useState([])

    useEffect(() => {
        let mount = true
        getVehicule()
            .then(res => {
                console.log("res from api", res)
                setVehicule(res)
                return () => mount = false
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
                        </div>   
                        
                        
                        <a href="/addVehicule" className="btn btn-success" data-toggle="modal"><i className="material-icons"> &#xE147;</i> <span>Add </span></a>
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
            <th>Immatriculation</th>
            <th>Marque</th>
            <th>Model</th>
            <th>Taille</th>
           
            <th>Action</th>
        </tr>
    </thead>
    <tbody>

    {Vehicule?.map(item => {
        
return (
    <tr key={item._id}>
            <td>
                <span className="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label htmlFor="checkbox1"></label>
                </span>
            </td>

            <td>{item.marque}</td>
            <td>{item.taille}</td>
            <td>{item.model}</td>
            <td>{item.immatriculation}</td>
           
           
           
          
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




}; export default Vehicule;