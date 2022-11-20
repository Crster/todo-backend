import express from "express"
import apiRoute from "./api"
import pageRoute from "./pages"

const router = express.Router()

router.use("/api", apiRoute)
router.use("/", pageRoute)

export default router
