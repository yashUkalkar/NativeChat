// Packages
import { Router } from "express";

// Controller
import { authController } from "../controllers/authController.js";

const router = Router();

router.post("/signin", authController.signInUser);
router.post("/signup", authController.signUpUser);

export default router;
