import Role from "./roleModel";
import logger from "../../utils/logger";
import _ from "lodash";

const roleController = {};

roleController.params = function (req, res, next, id) {
  Role.findById(id).then(
    function (role) {
      if (!role) {
        next(new Error("No Role with that ID."));
      } else {
        req.role = role;
        next();
      }
    },
    function (err) {
      next(err);
    }
  );
};

roleController.get = function (req, res, next) {
  Role.find({})
    .exec()
    .then(
      function (roles) {
        res.json(roles);
      },
      function (err) {
        next(err);
      }
    );
};

roleController.post = function (req, res, next) {
  logger.info("Post role function call");
  const newRole = req.body;
  Role.create(newRole).then(
    function (role) {
      res.json(role);
    },
    function (err) {
      next(err);
    }
  );
};

roleController.getOne = function (req, res, next) {
  const role = req.role;
  res.json(role);
};

roleController.put = function (req, res, next) {
  let role = req.role;

  const update = req.body;

  _.merge(role, update);

  role.save(function (err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

roleController.delete = function (req, res, next) {
  req.role.delete(function (err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};

export default roleController;
