import User from "./userModel";
import logger from "../../utils/logger";
import _ from "lodash";
import { signToken } from "../../auth/auth";

const userController = {};

userController.params = function (req, res, next, id) {
  logger.info("Interceptor Middleware :id");

  User.findById(id)
    .populate("role")
    .select("-password")
    .exec()
    .then(
      function (user) {
        if (!user) {
          next(new Error("No User with that ID."));
        } else {
          req.user = user;
          next();
        }
      },
      function (err) {
        next(err);
      }
    );
};

userController.get = function (req, res, next) {
  logger.info("Get all user function call");
  User.find({})
    .populate("role")
    .select("-password")
    .exec()
    .then(
      function (users) {
        res.json(users);
      },
      function (err) {
        next(err);
      }
    );
};

userController.post = function (req, res, next) {
  logger.info("Post user function call");
  const newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err) next(err);
    const token = signToken(user._id);
    res.json({ token: token });
  });
};

userController.getOne = function (req, res, next) {
  const user = req.user;
  res.json(user);
};

userController.put = function (req, res, next) {
  let user = req.user;

  const update = req.body;

  _.merge(user, update);

  user.save(function (err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved.toJson());
    }
  });
};

userController.delete = function (req, res, next) {
  req.user.delete(function (err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed.toJson());
    }
  });
};

userController.me = function (req, res) {
  res.json(req.user.toJson());
};

export default userController;
