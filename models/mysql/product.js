import { prisma } from "../../utils/prisma.js";

export class ProductModel {
  async getAll() {
    return await prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }
  
  async getById({ id }) {
    return await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }
}