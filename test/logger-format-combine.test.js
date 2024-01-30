import winston from "winston";

test("create new logger combine format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello from Error");
  logger.warn("Hello from Warn");
  logger.info("Hello from Info");
});
