import "./Contrat.css"

import "../home/home.scss"
import React, { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Contrat.css";
import {
    FaTh,
    FaBars,

    FaShoppingBag,

} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


import axios from "axios";


import { getContrat } from "../../services/ApiService";

export default function Contrat() {

    const [Contrat, setContrat] = useState([])

    useEffect(() => {
        let mount = true
        getContrat()
            .then(res => {
                console.log("res from api", res)
                setContrat(res)
                return () => mount = false
            })
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/client",
            name: "Client",
            icon: <PersonOutlineIcon />
        },
        {
            path: "/ZoneParking",
            name: "ZoneParking",
            icon: <StoreIcon />
        },
        {
            path: "/contrat",
            name: "Contrat",
            icon: <CreditCardIcon />
        },
        {
            path: "/vehicule",
            name: "Vehicule",
            icon: <FaShoppingBag />
        },
        {
            path: "/login",
            name: "Deconnexion",
            icon: <ExitToAppIcon />
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


                                    className="form-control"
                                    placeholder="Rechercher un  Contrat"
                                    aria-label="Search"
                                />
                            </form>
                        </div>   <a href="/addContrat" className="btn btn-success" data-toggle="modal"><i className="material-icons"> &#xE147;</i> <span>Add </span></a>
                    </header>
                </div>

                <div className="container">
                    <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                        <div className="top_section">
                            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">ParkApp</h1>
                            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                <FaBars onClick={toggle} />
                            </div>
                        </div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                    <div className="icon">{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
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
                                    <th>N°</th>
                                    <th>Debut</th>
                                    <th>Fin</th>
                                    <th>Durée</th>
                                    <th>Montant</th>
                                    <th>Statut</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Contrat?.map(item => {
                                    const index = 0;
                                    return (
                                        <tr key={item._id}>

                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                    <label htmlFor="checkbox1"></label>
                                                </span>
                                            </td>

                                            <td>{index + 1}</td>
                                            <td>{item.start_date}</td>
                                            <td>{item.end_date}</td>
                                            <td>{item.statut}</td>
                                            <td>{item.duree}</td>
                                            <td>{item.montant}</td>


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
}