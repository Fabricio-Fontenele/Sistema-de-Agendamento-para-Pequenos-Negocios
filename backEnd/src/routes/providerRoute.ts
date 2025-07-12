import { Router } from "express";
import {
  createProvider,
  listProviders,
  updateProvider,
  deleteProvider
} from "../controllers/providerController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticate, createProvider);
router.get("/", authenticate, listProviders); // ?businessId=1
router.put("/:id", authenticate, updateProvider);
router.delete("/:id", authenticate, deleteProvider);

export default router;