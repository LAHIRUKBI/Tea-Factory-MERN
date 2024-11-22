import Product from '../model/product.model.js';

export const addProduct = async (req, res) => {
  try {
    const { type, price, weight, introduction } = req.body;

    if (!type || !price || !weight || !introduction) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({ type, price, weight, introduction });
    await newProduct.save();
    res.status(201).json({ message: "Tea packet added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};
