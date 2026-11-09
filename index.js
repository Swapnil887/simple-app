const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.get("/", (req, res) => {
    return res.json({
        "message": "Yooo"
    })
})


app.get("/secret", (req, res) => {
    return res.json({
        "message": process.env.MESSAGE
    })
})

app.listen(3000, '0.0.0.0', () => {
    console.log("Heeeyyyy I am up!!!!")
})
