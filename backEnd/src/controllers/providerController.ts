import { Request, Response } from "express";
import { prisma } from "../prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

// Criar provider (prestador)
export const createProvider = async (req: AuthRequest, res: Response) => {
  const { businessId, name } = req.body;
  if (!businessId || !name) {
    return res
      .status(400)
      .json({ error: "Campos obrigatórios: businessId, name" });
  }

  // Só o dono pode cadastrar provider
  const business = await prisma.business.findUnique({
    where: { id: businessId },
  });
  if (!business)
    return res.status(404).json({ error: "Empresa não encontrada." });
  if (business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({
        error: "Você não tem permissão para cadastrar provider nesta empresa.",
      });
  }

  const provider = await prisma.provider.create({
    data: { name, businessId },
  });
  res.status(201).json(provider);
};

// Listar providers da empresa
export const listProviders = async (req: AuthRequest, res: Response) => {
  const { businessId } = req.query;
  if (!businessId)
    return res.status(400).json({ error: "businessId obrigatório na query" });

  const providers = await prisma.provider.findMany({
    where: { businessId: Number(businessId) },
    orderBy: { name: "asc" },
  });
  res.json(providers);
};

// Atualizar provider
export const updateProvider = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const provider = await prisma.provider.findUnique({
    where: { id: Number(id) },
    include: { business: true },
  });
  if (!provider)
    return res.status(404).json({ error: "Prestador não encontrado." });
  if (provider.business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para alterar este provider." });
  }

  const updated = await prisma.provider.update({
    where: { id: Number(id) },
    data: { name },
  });
  res.json(updated);
};

// Deletar provider
export const deleteProvider = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const provider = await prisma.provider.findUnique({
    where: { id: Number(id) },
    include: { business: true },
  });
  if (!provider)
    return res.status(404).json({ error: "Prestador não encontrado." });
  if (provider.business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para deletar este provider." });
  }

  await prisma.provider.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
