import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  donationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donation', required: true, index: true },
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  requestedQuantity: { type: Number, required: true, min: 0.01 },
  message: { type: String, trim: true, maxlength: 500 },
  preferredPickupTime: { type: Date, required: true },
  contactNumber: { type: String, required: true, trim: true },
  status: { type: String, enum: ['PENDING','ACCEPTED','REJECTED','CANCELLED','COLLECTED','COMPLETED'], default: 'PENDING', index: true }
}, { timestamps: true });

requestSchema.index({ donationId: 1, recipientId: 1 });
export default mongoose.model('Request', requestSchema);
