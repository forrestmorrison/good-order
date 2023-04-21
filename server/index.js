const express = require("express")
const port = process.env.PORT || 4173
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}`)
})