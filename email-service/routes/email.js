import { Router } from "express";
import { __dirname } from "../config.js";
import EmailController from "../controllers/email.js";

const router = Router();
router.post("/", EmailController.sendEmail);

export default router;