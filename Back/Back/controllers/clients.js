import Client from "../models/clients.js";
import asyncHandler from "express-async-handler";
export const createClient = async (req, res, next) => {
    const newClient = new Client(req.body);
  
    try {
      const savedClient = await newClient.save();
      res.status(200).json(savedClient);
      // res.status(404).json({msg: "error!!"})
    } catch (err) {
      next(err);
    }
  };

// Get all Clients
export const getClients = asyncHandler(async (req, res) => {
  const Clients = await Client.find();
  res.status(200).json(Clients);
});

// Get single Client
export const getClient =async (req, res, next) => {
  try {
    const Client = await Client.findById(req.params.id);
    res.status(200).json(Client);
  } catch (err) {
    next(err);
  }
};
// Delete Client
export const deleteClient = async (req, res, next) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(200).json("Client a été supprimé.");
  } catch (err) {
    next(err);
  }
};

// Update Client
export const updateClient = async (req, res, next) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedClient);
  } catch (err) {
    next(err);
  }
};



