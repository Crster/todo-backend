import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("welcome", { title: "Landing Page" })
})

export default router
