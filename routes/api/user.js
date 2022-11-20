import express from "express"
import { getAllUser, getUser, addUser } from "../../controllers"

const router = express.Router()

router.get("/", async (req, res) => {
  const users = await getAllUser(req.query)
  res.json(users)
})

router.post("/", async (req, res) => {
  const user = await addUser(req.body)
  res.json(user)
})

router.post("/:id", async (req, res) => {
  const user = await getUser(req.query)
  res.json(user)
})

export default router
