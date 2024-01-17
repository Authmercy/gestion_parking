import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ZoneParkingSchema = new Schema({
    type: {
    type: String,
    required: true,
  },
   
  numParking: {
    type: Number,
    required: true,
  },
 
});

export default  mongoose.model('ZoneParking', ZoneParkingSchema);