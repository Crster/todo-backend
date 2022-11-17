import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("landing", {
        message: "Extra",
        age: 10
    })
})

export default router