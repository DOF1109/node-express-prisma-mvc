export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel;
  }

  getAll = async (req, res) => {
    try {
      const products = await this.productModel.getAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching products" });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await this.productModel.getById({ id });
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching product" });
    }
  };
}
