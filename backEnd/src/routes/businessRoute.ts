import { Router } from "express";
import {
  createBusiness,
  listMyBusinesses,
  updateBusiness,
  deleteBusiness,
} from "../controllers/businessController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticate, createBusiness);
router.get("/", authenticate, listMyBusinesses);
router.put("/:id", authenticate, updateBusiness);
router.delete("/:id", authenticate, deleteBusiness);

export default router;
