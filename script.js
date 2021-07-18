const express= require("express")
const app = express()
PORT = process.env.PORT || 3000
app.get("/",(req,resp)=>{
    resp.json("hi")
})
app.listen(PORT)