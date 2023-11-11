import pino from 'pino';
import { z } from 'zod';

const logLevelModel = z
  .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
  .default('info');

export function makeLogger(): pino.Logger {
  const logLevel = logLevelModel.parse(process.env.LOG_LEVEL);

  return pino(
    {
      level: logLevel,
    },
  );
}
