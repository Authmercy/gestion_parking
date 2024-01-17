import express from "express";
const router = express.Router();

import {
    createZoneParking,
    getZoneParkings,
    getZoneParking,
    deleteZoneParking,
    updateZoneParking,
} from "../controllers/zoneParking.js";

router.post("/",  createZoneParking);
router.put("/:id",updateZoneParking);
router.get("/",  getZoneParkings);
router.get("/:id",  getZoneParking);
router.delete("/:id",  deleteZoneParking);
export default router