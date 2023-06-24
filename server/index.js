require("dotenv").config() // импортируем конфиг из модуля .env
const express = require("express")
const router = require("./routes/index")
const cors = require("cors")

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
app.get("/", (req, res) => {
    res.status(200).json({message: "Hi"})
})
app.use("/app", router)
