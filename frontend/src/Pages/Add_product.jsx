import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add_product() {
  const [formData, setFormData] = useState({
    mainCategory: '',
    type: '',
    price: '',
    weight: '',
    introduction: '',
  });

  const navigate = useNavigate();

  const teaCategories = {
    "Traditional Tea Types": [
      "Green Tea", "Black Tea", "White Tea", "Oolong Tea", "Pu-erh Tea",
    ],
    "Herbal and Infused Variants": [
      "Chamomile Tea", "Peppermint Tea", "Rooibos Tea (Red Tea)", "Hibiscus Tea", "Lemongrass Tea",
    ],
    "Specialty and Regional Teas": [
      "Darjeeling Tea", "Assam Tea", "Matcha (Japanese Green Tea)", "Sencha (Traditional Japanese Tea)", "Ceylon Tea",
    ],
    "Flavored and Blended Teas": [
      "Earl Grey (Black Tea with Bergamot)", "Masala Chai", "Jasmine Green Tea", "Vanilla Rooibos", "Spiced Apple Tea",
    ],
    "Unique and Wellness Teas": [
      "Genmaicha (Green Tea with Roasted Rice)", "Detox Tea", "Blue Pea Tea (Butterfly Pea Flower)", "Turmeric Tea", "Yerba Mate",
    ],
  };

  const weights = ["50g", "100g", "250g", "500g", "1kg"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/products', formData);

      alert('Tea packet added successfully!');
      setFormData({
        mainCategory: '',
        type: '',
        price: '',
        weight: '',
        introduction: '',
      });

      // Navigate to /productview
      navigate('/productview');
    } catch (error) {
      console.error('Error adding tea packet:', error);
    }
  };

  const handleMainCategoryChange = (e) => {
    const mainCategory = e.target.value;
    setFormData({
      ...formData,
      mainCategory,
      type: '', // Reset subcategory selection
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-3xl font-extrabold text-white mb-6 drop-shadow-lg">
        Add Tea Leaf Packet
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-2xl space-y-6 border border-gray-700"
      >
        <label className="block">
          <span className="text-gray-300 font-semibold">Main Category</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-gray-700 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.mainCategory}
            onChange={handleMainCategoryChange}
            required
          >
            <option value="" disabled>Select main category</option>
            {Object.keys(teaCategories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>

        {formData.mainCategory && (
          <label className="block">
            <span className="text-gray-300 font-semibold">Type of Tea</span>
            <select
              className="form-select mt-2 block w-full rounded-lg border-gray-700 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="" disabled>Select tea type</option>
              {teaCategories[formData.mainCategory].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
        )}

        <label className="block">
          <span className="text-gray-300 font-semibold">Price (in $)</span>
          <input
            type="number"
            className="form-input mt-2 block w-full rounded-lg border-gray-700 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-300 font-semibold">Weight</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-gray-700 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            required
          >
            <option value="" disabled>Select weight</option>
            {weights.map((weight, index) => (
              <option key={index} value={weight}>{weight}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-gray-300 font-semibold">Introduction</span>
          <textarea
            className="form-textarea mt-2 block w-full rounded-lg border-gray-700 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
            value={formData.introduction}
            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Sell Packet
        </button>
      </form>
    </div>
  );
}
