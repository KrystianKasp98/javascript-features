import { Router } from "express";
import { __dirname } from "../config.js";
import StaticController from "../controllers/index.js";

const router = Router();

router.get("/", StaticController.route);

export default router;
