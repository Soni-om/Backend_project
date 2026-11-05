import { Router } from "express"
import { registarUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registarUser)

export default router