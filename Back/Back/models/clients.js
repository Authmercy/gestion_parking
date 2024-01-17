import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
   nom: {
    type: String,
    //required: true,
  },
 
   prenom: {
    type: String,
    //required: true,
  },
   email: {
    type: String,
    //required: true,
  },
  cni: {
    type: Number,
    //required: true,
  },
  tel: {
    type: Number,
    //required: true,
  },
 
 
});

export default mongoose.model('Client', ClientSchema);