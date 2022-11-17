import { createLogger, transports, format } from "winston"

const beautifyFormat = format.combine(
  format.colorize({
      all:true
  }),
  format.timestamp(),
  format.printf(
      info => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const logger = createLogger({
  format: beautifyFormat,
  transports: [new transports.Console()],
})

export default logger;
