import express from "express";
import auth from "./auth";
import * as ctrl from "./controller";

const router = express.Router();

// before we send back a jwt, lets check
// the password and username match what is in the DB
router.post("/signin", auth.verifyUser(), ctrl.signin);

module.exports = router;
