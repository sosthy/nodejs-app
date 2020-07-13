import logger from "../utils/logger";

const globalErrorHandling = () => {
  return function (err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === "UnauthorizedError") {
      res.status(401).send("Invalid token");
      return;
    }
    logger.error(err.stack);
    res.status(500).send("Ooops");
  };
};

export default globalErrorHandling;
