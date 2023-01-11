import express from "express"

import apiRoute from "./api"
import authRoute from "./auth"
import pageRoute from "./pages"

const router = express.Router()

router.use("/api", apiRoute)
router.use("/", authRoute)
router.use("/", pageRoute)

export default router
