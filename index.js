import express from "express"
import htmlTemplate from "./modules/html-template"

import config from "./modules/config"
import logger from "./modules/logger"
import routes from "./routes"

const server = express()

server.engine("html", htmlTemplate)
server.set("view engine", "html")
server.set("views", config.viewPath)
server.use(routes)

server.listen(config.port, () => {
  logger.info(`Server is running at http://localhost:${config.port}/`)
})
