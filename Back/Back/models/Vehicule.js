import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VehiculeSchema = new Schema({
   marque: {
    type: String,
    required: true,
  },
   model: {
    type: String,
    required: true,
  },

   immatriculation: {
    type: String,
    required: true,
    unique: true,
  },
 
  taille: {
    type: String,
    required: true,
  },
 
});

export default mongoose.model('Vehicule', VehiculeSchema);