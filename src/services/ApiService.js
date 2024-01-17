import axios from "axios";

export  async function getClient() {
  const res = await axios.get('http://localhost:8000/api/ClientRoutes/');
  return res.data};
  
  export  async function getContrat() {
    const res = await axios.get('http://localhost:8000/api/contrat/');
    return res.data;};
    
    export  async function getVehicule() {
      const res = await axios.get('http://localhost:8000/api/vehicule/');
      return res.data;};
      export  async function getZoneParking() {
        const res = await axios.get('http://localhost:8000/api/ZoneParking/');
        return res.data;};

        export  async function deleteClient(id) {
          const res = await axios.delete('http://localhost:8000/api/ClientRoutes/:id');
          return res.data;}
          export  async function editClient(id,Client) {
            const res = await axios.patch('http://localhost:8000/api/ClientRoutes/:id');
            return res.data;}