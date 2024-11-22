import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Product_update() {
  const { id } = useParams(); // Retrieve the product ID from the URL parameters
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mainCategory: "",
    type: "",
    price: "",
    weight: "",
    introduction: "",
  });

  const [error, setError] = useState("");

  // Fetch product data when the component mounts or when the id changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        if (response.data?.product) {
          setFormData(response.data.product); // Populate form with data
        } else {
          throw new Error("Product data not found");
        }
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching product details");
      }
    };

    if (id) {
      fetchProduct(); // Fetch product details using the ID from the URL
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, formData);
      navigate("/productview"); // Redirect to the product view page after updating
    } catch (error) {
      setError(error.response?.data?.message || "Error updating product");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">
        Update Product
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        {["mainCategory", "type", "price", "weight", "introduction"].map((field) => (
          <div key={field} className="mb-4">
            <label
              htmlFor={field}
              className="block text-sm font-semibold text-gray-700"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "price" || field === "weight" ? "number" : "text"}
              id={field}
              name={field}
              value={formData[field]} // Bind input value to form data
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
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
