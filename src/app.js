import express, { Router } from "express"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded ({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//Router import

import userRout from "./routs/user.routs.js"

//Routes declarations

app.use("/Api/v1/user", userRout)



export {app}

