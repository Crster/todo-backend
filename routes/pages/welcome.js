import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("welcome", { title: "Welcome" })
})

export default router
