import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONOGODB connected !! DB_HOST ${connectioninstance.connection.host}`);
    } catch (error) {
        console.error(" MONGODB CONNETION ERROR ",error);
        process.exit(1)
    }
}

export default connectDB;