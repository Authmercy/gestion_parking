import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Client from "../models/clients.js";
import Vehicule from "../models/Vehicule.js";

const ContratSchema = new Schema({
   start_date: {
    type: Date,
    default: Date.now()
  },
  client:[
   { type: mongoose.Schema.Types.ObjectId,
     ref: 'Client',
     required: true,}],


  vehicule:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicule',
    required: true,}],

   end_date: {
    type: Date,
    default: Date.now(),

  },

  statut: {
    type: String,
    required: true,
    
  },
  duree: {
    type: Number,
    required: true,
    //required: true,
  },
  montant: {
    type: Number,
    
  },

});

export default mongoose.model('Contrat', ContratSchema);