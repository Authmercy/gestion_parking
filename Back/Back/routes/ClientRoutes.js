import express from "express";
const router = express.Router();

import  {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient,
} from "../controllers/clients.js";

router.post("/", createClient);
router.put("/:id",  updateClient);
router.get("/", getClients);
router.get("/:id",  getClient);
router.delete("/:id", deleteClient);

export default router;
