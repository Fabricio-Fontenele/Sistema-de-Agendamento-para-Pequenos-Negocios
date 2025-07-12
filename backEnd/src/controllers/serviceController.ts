import { Request, Response } from "express";
import { prisma } from "../prisma";
import { AuthRequest } from "../middlewares/authMiddleware";

// Criar serviço
export const createService = async (req: AuthRequest, res: Response) => {
  const { businessId, name, description, price, duration } = req.body;
  if (!name || !price || !duration || !businessId) {
    return res
      .status(400)
      .json({
        error: "Campos obrigatórios: name, price, duration, businessId",
      });
  }

  // Confere se o usuário é dono do negócio
  const business = await prisma.business.findUnique({
    where: { id: businessId },
  });
  if (!business)
    return res.status(404).json({ error: "Empresa não encontrada." });
  if (business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({
        error: "Você não tem permissão para criar serviço nesta empresa.",
      });
  }

  const service = await prisma.service.create({
    data: {
      name,
      description,
      price,
      duration,
      businessId,
    },
  });
  res.status(201).json(service);
};

// Listar serviços de uma empresa
export const listServices = async (req: AuthRequest, res: Response) => {
  const { businessId } = req.query;
  if (!businessId)
    return res.status(400).json({ error: "businessId obrigatório na query" });

  const services = await prisma.service.findMany({
    where: { businessId: Number(businessId) },
    orderBy: { name: "asc" },
  });
  res.json(services);
};

// Atualizar serviço
export const updateService = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, description, price, duration } = req.body;

  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
    include: { business: true },
  });
  if (!service)
    return res.status(404).json({ error: "Serviço não encontrado." });

  // Só dono pode atualizar
  if (service.business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para alterar este serviço." });
  }

  const updated = await prisma.service.update({
    where: { id: Number(id) },
    data: { name, description, price, duration },
  });
  res.json(updated);
};

// Deletar serviço
export const deleteService = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
    include: { business: true },
  });
  if (!service)
    return res.status(404).json({ error: "Serviço não encontrado." });

  if (service.business.ownerId !== req.user.userId) {
    return res
      .status(403)
      .json({ error: "Você não tem permissão para deletar este serviço." });
  }

  await prisma.service.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
