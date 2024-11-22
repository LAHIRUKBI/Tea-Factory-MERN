import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function View_product() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error
  const navigate = useNavigate(); // For navigation after update or delete

  useEffect(() => {
    // Fetch the products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products'); // Adjust the URL based on your API
        setProducts(response.data.products); // Set the products data
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      // Refresh the list after deleting the product
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError('Error deleting product');
    }
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetching fails
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-600">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
              >
                {/* Main Category Display */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-teal-600">{product.mainCategory}</h3>
                </div>

                {/* Type Display */}
                <div className="mb-4">
                  <h4 className="text-xl text-gray-700 font-semibold">{product.type}</h4>
                </div>

                {/* Introduction Display */}
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Introduction:</strong> {product.introduction}
                </p>

                {/* Price and Weight Display */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <strong>Weight:</strong> {product.weight}
                  </p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                </div>

                {/* Update and Delete Buttons */}
                <div className="flex justify-between mt-4">
                  <Link
                    to={`/updateproduct/${product._id}`} // Link to the update page
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors duration-300"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)} // Delete product
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
