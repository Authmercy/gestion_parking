
import { useContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Client from "./Pages/client/client";
import ListeClient from "./Pages/client/listeClient";
import AddZone from "./Pages/ZoneParking/add";
import Login from "./Pages/login/login";
import Inscription from "./Pages/inscription.jsx/inscription";
import PageHome from "./Pages/home/home";
import Contrat from "./Pages/contrat/Contrat";
import Add from "./Pages/contrat/add";
import Vehicule from "./Pages/vehicule/Vehicule";
import DeleteClient from "./Pages/client/delete";
import AddVehicule from "./Pages/vehicule/add"
import ZoneParking from "./Pages/ZoneParking/ZoneParking";

function App() {
  

  
 
  return (
  
    
      <div>
        <BrowserRouter>
          <Routes>
        
              
          <Route path="/addclient" element={ <Client/> } />
              <Route path="/Home"  element={ <PageHome />} />
              <Route path="/delete/:id" element={ <DeleteClient/> } />
              <Route path="/client" element={ <ListeClient/> } />
              <Route path="/ZoneParking" element={ <ZoneParking/> } />
              <Route path="/" element={ <Login/> } />
              <Route path="/addContrat" element={ <Add/> } />
              <Route path="/addVehicule" element={ <AddVehicule/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/inscription" element={ <Inscription/> } />
              <Route path="/vehicule" element={ <Vehicule/>}/>
              <Route path="/contrat" element={ <Contrat/> }/> </Routes>
               
              
        </BrowserRouter>
      </div>
    );
  }
  


export default App;
