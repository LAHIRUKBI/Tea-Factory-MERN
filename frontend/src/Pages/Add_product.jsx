import React, { useState } from 'react';
import axios from 'axios';

export default function Add_product() {
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    weight: '',
    introduction: '',
  });

  const teaTypes = [
    "Green Tea", "Black Tea", "White Tea", "Oolong Tea", "Pu-erh Tea",
    "Chamomile Tea", "Peppermint Tea", "Rooibos Tea (Red Tea)", "Hibiscus Tea", "Lemongrass Tea",
    "Darjeeling Tea", "Assam Tea", "Matcha (Japanese Green Tea)", "Sencha (Traditional Japanese Tea)", "Ceylon Tea",
    "Earl Grey (Black Tea with Bergamot)", "Masala Chai", "Jasmine Green Tea", "Vanilla Rooibos", "Spiced Apple Tea",
    "Genmaicha (Green Tea with Roasted Rice)", "Detox Tea (Blends of Green and Herbal Teas)", "Blue Pea Tea (Butterfly Pea Flower)",
    "Turmeric Tea", "Yerba Mate"
  ];

  const weights = ["50g", "100g", "250g", "500g", "1kg"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/products', formData);

      alert('Tea packet added successfully!');
      setFormData({ type: '', price: '', weight: '', introduction: '' });
    } catch (error) {
      console.error('Error adding tea packet:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
        Add Tea Leaf Packet
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl space-y-6 border border-gray-300"
      >
        <label className="block">
          <span className="text-gray-800 font-semibold">Type of Tea</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-black bg-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
          >
            <option value="" disabled>Select tea type</option>
            {teaTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-gray-800 font-semibold">Price (in $)</span>
          <input
            type="number"
            className="form-input mt-2 block w-full rounded-lg border-black bg-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-800 font-semibold">Weight</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-black bg-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
          <span className="text-gray-800 font-semibold">Introduction</span>
          <textarea
            className="form-textarea mt-2 block w-full rounded-lg border-black bg-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none"
            rows="3"
            value={formData.introduction}
            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Sell Packet
        </button>
      </form>
    </div>
  );
}
