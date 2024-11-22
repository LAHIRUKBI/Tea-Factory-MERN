import Product from '../model/product.model.js';

export const addProduct = async (req, res) => {
    try {
      const { mainCategory, type, price, weight, introduction } = req.body;
  
      if (!mainCategory || !type || !price || !weight || !introduction) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newProduct = new Product({ mainCategory, type, price, weight, introduction });
      await newProduct.save();
      res.status(201).json({ message: "Tea packet added successfully", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Error adding product", error });
    }
  };



  // Fetch all products from the database
export const getProducts = async (req, res) => {
    try {
      const products = await Product.find(); // Retrieve all products from the database
      res.status(200).json({ success: true, products });
    } catch (err) {
      res.status(500).json({ message: "Error fetching products", error: err });
    }
  };



  // Update product by ID
export const updateProduct = async (req, res) => {
    try {
      const { mainCategory, type, price, weight, introduction } = req.body;
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { mainCategory, type, price, weight, introduction },
        { new: true } // Return the updated product
      );
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  };
  





  // Delete product
export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product' });
    }
  };
  
