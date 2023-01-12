import express from "express"
import passport from "../services/passport"

const router = express.Router()
router.post(
  "/local",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),
)

export default router
