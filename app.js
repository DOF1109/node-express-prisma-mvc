import express from "express";
import corsMiddleware from "./middlewares/cors.js";

const createApp = ({ dbModel }) => {
  const PORT = process.env.PORT ?? 1234;

  const app = express();
  app.disable("x-powered-by"); // disable the header X-Powered-By: Express

  // ------------ Middleware ------------
  // Middleware to parse JSON request bodies
  app.use(express.json());
  app.use(corsMiddleware());

  // ------------ Endpoints ------------
  app.use("/products", createProductRouter({ productModel: dbModel.product }));
  app.use("/categories", createCategoryRouter({ categoryModel: dbModel.category }));

  // ------------ Start server ------------
  app.listen(PORT, () =>
    console.log(`Server is listening on port http://localhost:${PORT}`)
  );
};

export default createApp;