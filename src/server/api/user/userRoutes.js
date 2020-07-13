import express from "express";
import ctrl from "./userController";
import auth from "../../auth/auth";

const checkUser = [auth.decodeToken(), auth.getFreshUSer()];
const router = express.Router();

// setup boilerplate route just to satisfy a request
router.param("id", ctrl.params);
router.get("/me", checkUser, ctrl.me);

router.route("/").get(ctrl.get).post(checkUser, ctrl.post);

router
  .route("/:id")
  .get(ctrl.getOne)
  .put(checkUser, ctrl.put)
  .delete(checkUser, ctrl.delete);

export default router;
