import express from "express"
import apiRoute from "./api"
import adminRoute from "./admin"
import landingRoute from "./landing"

const router = express.Router()

router.use("/api", apiRoute)
router.use("/admin", adminRoute)
router.use("/", landingRoute)

export default router
