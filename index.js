require("dotenv").config();
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log("You are currently in the homepage")
    res.send('<h2>my name is homepage</h2>')
})
app.get("/sumit", (req, res) => {
    console.log("You are currently in sumit page")
    res.send('<h2>my name is sumit page</h2>')

})
app.listen(process.env.PORT, () => {
    console.log(`you are working on port number ${process.env.PORT}`)
})