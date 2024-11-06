const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const routes = require("./routes")

const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use(routes)

mongoose.connect(process.env.DATABASE_ACCESS)
.then(()=>{
    console.log("Database is now connected")
}   
)

app.listen(process.env.PORT, ()=>{
    console.log(`App is running on port, ${process.env.PORT}`);
    
})
