import express from "express";
const router = express.Router();
import {
    createVehicule,
    getVehicules,
    getVehicule,
    deleteVehicule,
    updateVehicule,
}from "../controllers/vehicule.js";


router.post("/add", createVehicule);
//UPDATE
router.put("/:id", updateVehicule);
//GET ALL
router.get("/",  getVehicules);
//GET
router.get("/:id", getVehicule);
//DELETE
router.delete("/:id", deleteVehicule);

export default router
