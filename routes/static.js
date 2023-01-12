import express from "express"
import favicon from "serve-favicon"
import config from "../services/config"

const routes = [
  {
    path: "/",
    localPath: config.wwwroot,
  },
  {
    path: "/jquery",
    localPath: `${config.nodeModule}/jquery/dist`,
  },
  {
    path: "/bootstrap",
    localPath: `${config.nodeModule}/bootstrap/dist`,
  },
  {
    path: "/fontawesome",
    localPath: `${config.nodeModule}/@fortawesome/fontawesome-free`,
  },
]

const router = express.Router()

router.use(favicon(`${config.wwwroot}/favicon.png`))
routes.forEach((ii) =>
  router.use(ii.path, express.static(ii.localPath, config.staticOption)),
)

export default router
