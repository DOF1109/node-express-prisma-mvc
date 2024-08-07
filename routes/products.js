import { Router } from "express";
import { ProductController } from "../controllers/product.js";

const createProductRouter = ({ productModel }) => {
  const productRouter = Router();
  const productController = new ProductController({ productModel });

  productRouter.get("/", productController.getAll);
  productRouter.post("/", productController.create);

  productRouter.get("/:id", productController.getById);
  productRouter.put("/:id", productController.update);
  productRouter.delete("/:id", productController.delete);
};

export default createProductRouter;