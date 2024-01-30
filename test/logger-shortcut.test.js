import winston from "winston";

test("create new logger shortcut", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
