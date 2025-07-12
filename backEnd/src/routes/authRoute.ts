import { Router, Response } from "express";
import { register, login } from "../controllers/authController";
import { authenticate, AuthRequest } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, (req: AuthRequest, res: Response) => {
  res.json({ user: req.user });
});

export default router;
