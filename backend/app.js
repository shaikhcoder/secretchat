const express = require("express")
const app = express()
app.get("/",(req,res)=>{

res.send("<h2>Hello world</h2>")
})

app.listen(3001,()=>{

console.log("Server is listen in port: 3001")
})