import winston from "winston";

test("create new logger transports file", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
      }),
    ],
  });

  logger.error("Hello from Error");
  logger.error("Hello from Error");
  logger.error("Hello from Error");
  logger.info("Hello from Info");
  logger.info("Hello from Info");
  logger.info("Hello from Info");
  logger.info("Hello from Info");
});
