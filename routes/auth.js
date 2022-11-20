import express from "express"
import { loginUser, registerUser } from "../controllers"

const router = express.Router()
router.post("/login", (req, res) => {
  try {
    const token = loginUser(req.body)
    res.send(token)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.post("/logout", (req, res) => {
  res.send("Logout!")
})

router.post("/register", async (req, res) => {
  try {
    await registerUser(req.body)
    res.status(200).send("Success")
  } catch (err) {
    res.status(500).send(err.message)
  }
})

export default router
