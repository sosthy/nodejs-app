import express from "express";
import ctrl from "./roleController";
import createRoutes from "../../utils/createRoutes";

const router = express.Router();

createRoutes(ctrl, router);

export default router;
