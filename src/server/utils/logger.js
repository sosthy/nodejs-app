import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "debug",
    }),
    new winston.transports.File({
      filename: "log",
      level: "debug",
    }),
  ],
});

export default logger;
