const express = require("express")
const carsRouter = require("./cars/carsRouter")

const server = express()
const port = 5000;
server.use(express.json())

server.use("/cars", carsRouter)
server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})