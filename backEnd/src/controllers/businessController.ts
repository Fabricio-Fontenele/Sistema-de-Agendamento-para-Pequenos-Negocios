import { Request, Response } from "express";
import { prisma } from "../prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

// Criar empresa
export const createBusiness = async (req: AuthRequest, res: Response) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: "Nome é obrigatório." });
  if (req.user.role !== "BUSINESS_OWNER") {
    return res
      .status(403)
      .json({ error: "Apenas donos de negócio podem criar empresas." });
  }
  const business = await prisma.business.create({
    data: {
      name,
      description,
      ownerId: req.user.userId,
    },
  });
  res.status(201).json(business);
};

// Listar empresas do usuário
export const listMyBusinesses = async (req: AuthRequest, res: Response) => {
  const businesses = await prisma.business.findMany({
    where: { ownerId: req.user.userId },
    orderBy: { createdAt: "desc" },
  });
  res.json(businesses);
};

// Atualizar empresa
export const updateBusiness = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const business = await prisma.business.findUnique({
    where: { id: Number(id) },
  });

  if (!business)
    return res.status(404).json({ error: "Empresa não encontrada." });
  if (business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para alterar esta empresa." });
  }

  const updated = await prisma.business.update({
    where: { id: Number(id) },
    data: { name, description },
  });
  res.json(updated);
};

// Deletar empresa
export const deleteBusiness = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const business = await prisma.business.findUnique({
    where: { id: Number(id) },
  });

  if (!business)
    return res.status(404).json({ error: "Empresa não encontrada." });
  if (business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para deletar esta empresa." });
  }

  await prisma.business.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
