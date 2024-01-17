import pino from "pino";
import { z } from "zod";

const logLevelModel = z
  .enum(["fatal", "error", "warn", "info", "debug", "trace"])
  .default("info");

function makeLogger(): pino.Logger {
  const logLevel = process.env.LOG_LEVEL
    ? logLevelModel.parse(process.env.LOG_LEVEL)
    : logLevelModel.parse('info');

  const logger = pino({
    level: logLevel,
  });
  return logger;
}

export const logger = makeLogger();
