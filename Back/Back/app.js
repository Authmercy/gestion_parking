import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

import db from "./db.js";
db();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.use(cors());
app.use(express.urlencoded({extended :true}))



import bodyParser from "body-parser";
import user from "./routes/user.js";
import contratRoutes from "./routes/contratRoutes.js";
import ClientRoutes from "./routes/ClientRoutes.js";
import vehiculeRoutes from  "./routes/vehiculeRoute.js";
import ZoneParkingRoute from "./routes/ZoneParkingRoute.js";

import cookieParser from "cookie-parser";
app.use(express.json());
app.use(cookieParser());
// Routes Middleware
app.use("/api/vehicule", vehiculeRoutes);
app.use("/api/contrat", contratRoutes);
app.use("/api/ZoneParking", ZoneParkingRoute);
app.use("/api/ClientRoutes", ClientRoutes);
app.use("/api/user", user);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  





















app.get("/" , (req, res)=> {
    res.json("Hello mate!");
});

app.get("*" , (req, res)=> {
    res.sendStatus("404");
});