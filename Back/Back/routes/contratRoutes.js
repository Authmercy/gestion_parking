import express from "express";
const router = express.Router();

import {
    createContrat,
    getContrats,
    getContrat,
    deleteContrat,
    updateContrat,
}from "../controllers/contrat.js";


router.post("/", createContrat);
router.put("/:id", updateContrat);
router.get("/", getContrats);
router.get("/:id",  getContrat);
router.delete("/:id",  deleteContrat);

export default router;
