
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{

    app.on("error", (error)=>{
        console.log("ERROR ",error);
        throw error
    })

    app.listen(process.env.PORT || 8000)
    console.log(`Server is running at PORT : ${
        process.env.PORT
    }`)
})
.catch((err)=>{
    console.log("MONOGO DB connection fail !!!")
})

////Your are start at middelwere and after fiensh is code you well commid this code and push on git hub
