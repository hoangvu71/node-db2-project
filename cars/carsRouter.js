const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const car = {
            VIN: req.body.VIN,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            clean: req.body.clean,
            salvage: req.body.salvage
        }
        const [updateCar] = await db("cars").insert(car)
        const newCar = await db("cars").where("id", updateCar)
        res.status(201).json(newCar)
    }
    catch(error) {
        next(error)
    }
})

module.exports = router