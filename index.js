import express from "express"
import bodyParser from "body-parser"
import * as eta from "eta"

import config from "./modules/config"
import logger from "./modules/logger"
import routes from "./routes"

const server = express()
eta.configure(config.eta)

server.engine("html", eta.renderFile)
server.set("view engine", "html")
server.set("views", config.viewPath)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(routes)

server.listen(config.port, () => {
  logger.info(`Server is running at http://localhost:${config.port}/`)
})
