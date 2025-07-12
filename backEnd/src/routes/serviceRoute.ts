import { Router } from "express";
import {
  createService,
  listServices,
  updateService,
  deleteService
} from "../controllers/serviceController";
import { authenticate } from "../middlewares/authMiddleware";

const router = Router();

// Todas precisam de autenticação
router.post("/", authenticate, createService);
router.get("/", authenticate, listServices); // ?businessId=1
router.put("/:id", authenticate, updateService);
router.delete("/:id", authenticate, deleteService);

export default router;