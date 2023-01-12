import express from "express"

import apiRoute from "./api"
import authRoute from "./auth"
import pageRoute from "./pages"
import staticRoute from "./static"

const router = express.Router()

router.use("/public", staticRoute)
router.use("/auth", authRoute)
router.use("/api", apiRoute)
router.use("/", pageRoute)

export default router
