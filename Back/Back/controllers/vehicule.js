
import  asyncHandler from "express-async-handler"
import Vehicule from "../models/Vehicule.js";





// Create Prouct
export const createVehicule =  async (req, res, next) => {
  const newVehicule = new Vehicule(req.body);

  try {
    const savedVehicule =   await  newVehicule.save();
    res.status(200).json(savedVehicule);
  } catch (err) {
    next(err);
  }
};
 


  

// Get all Vehicules
export const getVehicules = asyncHandler(async (req, res) => {
  const Vehicules = await Vehicule.find();
  res.status(200).json(Vehicules);
});

// Get single Vehicule
export const getVehicule = async (req, res, next) => {
  try {
    const Vehicule= await Vehicule.findById(req.params.id);
    res.status(200).json(Vehicule);
  } catch (err) {
    next(err);
  }
};

// Delete Vehicule
export const deleteVehicule =  async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicule n'a pas été trouvé.");
  } catch (err) {
    next(err);
  }
};

// Update Vehicule
export const updateVehicule =  async (req, res, next) => {
  try {
    const updatedVehicule = await Vehicule.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVehicule);
  } catch (err) {
    next(err);
  }
};

