const express = require("express")
const app = express()
const port=progress.argv[2] || 3000

const www= express.static(`${__dirname}/www`)
app.use(www)

app.listen(port,()=>{
    console.log(`running the server on port ${port}! visit http://localhost${port}`)
})