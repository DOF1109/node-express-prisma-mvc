import createApp from "./app";
import { ProductModel } from "./models/mysql/product";
import { CategoryModel } from "./models/mysql/category";

const dbModel = {
  product: ProductModel,
  category: CategoryModel,
};

createApp({ dbModel });
