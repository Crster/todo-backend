import express from "express"
import bodyParser from "body-parser"
import favicon from "serve-favicon"
import chtml from "@crster9600/crster-html"

import config from "./modules/config"
import logger from "./modules/logger"
import routes from "./routes"

const server = express()

server.engine("html", chtml.expressViewEngine)
server.set("view engine", "html")
server.set("views", config.viewPath)

server.use(favicon(`${config.wwwroot}/favicon.png`))
server.use("/public", express.static("public", config.staticOption))
server.use(
  "/public/jquery",
  express.static(`${config.nodeModule}/jquery/dist`, config.staticOption),
)
server.use(
  "/public/bootstrap",
  express.static(`${config.nodeModule}/bootstrap/dist`, config.staticOption),
)
server.use(
  "/public/fontawesome",
  express.static(
    `${config.nodeModule}/@fortawesome/fontawesome-free`,
    config.staticOption,
  ),
)

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
