import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Product_update({ onUpdate }) {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation after the update
  const [formData, setFormData] = useState({
    mainCategory: '',
    type: '',
    price: '',
    weight: '',
    introduction: '',
  });

  useEffect(() => {
    // Fetch product data when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        setFormData(response.data.product); // Set the fetched product data in state
      } catch (error) {
        console.error('Error fetching product', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/products/${id}`, formData);
      if (onUpdate) {
        onUpdate(response.data.product); // Update the product in the parent component
      }
      navigate('/productview'); // Navigate back to the product list
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">Update Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="mainCategory" className="block text-sm font-semibold text-gray-700">Main Category</label>
          <input
            type="text"
            id="mainCategory"
            name="mainCategory"
            value={formData.mainCategory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-semibold text-gray-700">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-semibold text-gray-700">Weight</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="introduction" className="block text-sm font-semibold text-gray-700">Introduction</label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-semibold"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
