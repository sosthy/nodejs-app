import express from "express";
import userRoutes from "./user/userRoutes";
import roleRoutes from "./role/roleRoutes";

const router = express.Router();

// api router will mount other reouters
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);

export default router;
