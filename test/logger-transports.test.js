import winston from "winston";

test("create new logger transports console", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello from Logger",
  });
});
