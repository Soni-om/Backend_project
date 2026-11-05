import { asyncHandler } from "../utils/asyncHandler.js";

const registarUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message : "ok"
    })
})

export {registarUser}