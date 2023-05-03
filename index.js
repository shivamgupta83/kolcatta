const express= require("express");
let app= express();
const mongoose=require("mongoose");
const helmet=require("helmet")
app.use(express.json());
app.use(helmet());


//we can also use .env file by require dotenv
mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/colcata",{
    useNewUrlParser:true
})
.then(()=>{console.log("mongooDb is connected")})
.catch((error)=>{console.log(error)})

let router=require("./routes/route.js")

app.use("/",router)

app.listen(3000,()=>{console.log(
    "server is running :port--3000"
)})