import express from "express"
import bodyParser from "body-parser"
import chtml from "@crster9600/crster-html"

import config from "./services/config"
import logger from "./services/logger"
import routes from "./routes"

const server = express()

server.engine("html", chtml.expressViewEngine)
server.set("view engine", "html")
server.set("views", config.viewPath)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(routes)

server.use((req, res) => {
  res.render("404")
})

server.use((error, req, res, next) => {
  res.render("500", { error: error.message })
})

server.listen(config.port, () => {
  logger.info(`Server is running at http://localhost:${config.port}/`)
})
