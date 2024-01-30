import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("create new rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "./log/app-%DATE%.log",
        zippedArchive: true,
        maxSize: "10m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info(`Hello World ${i}`);
  }
});
