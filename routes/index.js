import express from "express"
import passport from "../modules/passport"

import apiRoute from "./api"
import pageRoute from "./pages"
import authRoute from "./auth"

const router = express.Router()

router.use("/api", passport.authenticate("bearer"), apiRoute)
router.use("/", pageRoute)
router.use("/", authRoute)

export default router
