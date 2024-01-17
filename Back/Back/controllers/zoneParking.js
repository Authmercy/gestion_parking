


import asyncHandler from "express-async-handler";
import  ZoneParking from"../models/ZoneParking.js";



// Create Prouct
export const createZoneParking  = async (req, res, next) => {
  const newZoneParking= new ZoneParking(req.body);

  try {
    const savedZoneParking= await newZoneParking.save();
    res.status(200).json(savedZoneParking);
  } catch (err) {
    next(err);
  }
};

// Get all ZoneParkings

  export const getZoneParkings = asyncHandler(async (req, res) => {
  const ZoneParkings = await ZoneParking.find();
  res.status(200).json(ZoneParkings);
});

// Get single ZoneParking
export const getZoneParking = async (req, res, next) => {
  try {
    const ZoneParking= await ZoneParking.findById(req.params.id);
    res.status(200).json(ZoneParking);
  } catch (err) {
    next(err);
  }
};
// Delete ZoneParking
export const deleteZoneParking = async (req, res, next) => {
  try {
    await ZoneParking.findByIdAndDelete(req.params.id);
    res.status(200).json("ZoneParking has been deleted.");
  } catch (err) {
    next(err);
  }
};
// Update ZoneParking

export const updateZoneParking = async (req, res, next) => {
    try {
      const updatedZoneParking= await ZoneParking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedZoneParking);
    } catch (err) {
      next(err);
    }
  };

