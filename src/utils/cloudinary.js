import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';

import fs from "fs"


  // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });



    const uploadOncoudinary = async (localFilePath) =>{
      try {
        if(!localFilePath) return null

        //uploded file in cloudinary
         const Response = await cloudinary.uploader.upload(localFilePath, {
          resource_type : "auto"
        })
        
        console.log("File is uplode on cloudinary",   
          Response.url)
          return Response;

      } catch (error) {
        fs.unlinkSync(localFilePath)// Remove localy file save temporary file is the uploded opration got faild
        return null
      }
    }

    export {uploadOncoudinary}



 
    