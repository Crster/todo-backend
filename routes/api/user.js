import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    res.json({
        name: "Sample",
        age: 10
    })
})

export default router;