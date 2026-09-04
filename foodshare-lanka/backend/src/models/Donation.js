import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, required: true, trim: true, maxlength: 120 },
  category: { type: String, enum: ['Cooked Meals','Bakery','Fruits','Vegetables','Groceries','Dairy','Packaged Food','Other'], required: true, index: true },
  description: { type: String, required: true, trim: true, minlength: 10, maxlength: 1000 },
  quantity: { type: Number, required: true, min: 0.01 },
  unit: { type: String, enum: ['Meals','Portions','Kg','Packets','Boxes','Items'], required: true },
  condition: { type: String, enum: ['Fresh','Prepared Today','Packaged','Near Expiry'], required: true },
  preparationDate: { type: Date, required: true },
  bestBeforeDate: { type: Date, required: true },
  availableFrom: { type: Date, required: true },
  availableUntil: { type: Date, required: true, index: true },
  pickupAddress: { type: String, required: true, trim: true, maxlength: 250 },
  city: { type: String, required: true, trim: true, index: true },
  district: { type: String, required: true, trim: true, index: true },
  contactNumber: { type: String, required: true, trim: true },
  pickupInstructions: { type: String, trim: true, maxlength: 500 },
  status: { type: String, enum: ['AVAILABLE','REQUESTED','ACCEPTED','COLLECTED','COMPLETED','EXPIRED','CANCELLED'], default: 'AVAILABLE', index: true }
}, { timestamps: true });

donationSchema.index({ title: 'text', description: 'text', city: 'text', district: 'text' });
export default mongoose.model('Donation', donationSchema);
