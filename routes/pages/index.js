import express from "express"
import welcome from "./welcome"
import login from "./login"

const router = express.Router()
router.use(welcome)
router.use(login)

export default router
