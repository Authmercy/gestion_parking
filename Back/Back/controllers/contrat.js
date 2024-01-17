




import asyncHandler from "express-async-handler";
import Contrat from "../models/contrat.js";

import Vehicule from "../models/Vehicule.js";
import Client from "../models/clients.js";

export const createContrat = async (req, res, next) => {

  try {
    const Clients = await Client.find();
  if (!Clients) {
    return res.status(404).json({ error: 'Client not found' });
  }
// Create
  const newContrat= new Contrat(req.body);
  
   
    const savedContrat = await newContrat.save();
   
   
  
    res.status(200).json(savedContrat);
  } catch (err) {
    next(err);
  }
};

// Get all Contrats
export const getContrats =  async (req, res, next)=> {
  try {
     const Contrats= await Contrat.find();
  res.status(200).json(Contrats);
} catch (err) {
  next(err);
}
};

// Get single Contrat
export const getContrat =async (req, res, next) => {
  try {
    const Contrat  = await Contrat.findById(req.params.id);
    res.status(200).json(Contrat);
  } catch (err) {
    next(err);
  }};

// Delete Contrat
export const deleteContrat = async (req, res, next) => {
  try {
    await Contrat.findByIdAndDelete(req.params.id);
    res.status(200).json("Contrat has been deleted.");
  } catch (err) {
    next(err);
  }
};

// Update Contrat
export const updateContrat= async (req, res, next) => {
  try {
    const updatedContrat = await Contrat.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedContrat);
  } catch (err) {
    next(err);
  }
}

