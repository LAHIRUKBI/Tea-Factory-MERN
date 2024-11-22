import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  type: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: String, required: true },
  introduction: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
