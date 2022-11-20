import express from "express"
import { getAllUser, getUser } from "../../controllers"

const router = express.Router()

router.get("/", async (req, res) => {
  const users = await getAllUser(req.query)
  res.json(users)
})

router.post("/:id", async (req, res) => {
  const user = await getUser(req.query)
  res.json(user)
})

export default router
