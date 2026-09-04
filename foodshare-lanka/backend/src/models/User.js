import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  organizationName: { type: String, trim: true, maxlength: 150 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
  phone: { type: String, required: true, trim: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['DONOR','RECIPIENT','ADMIN'], required: true, index: true },
  donorType: { type: String, enum: ['Restaurant','Bakery','Supermarket','Hotel','Event Organizer','Household'] },
  recipientType: { type: String, enum: ['Charity','Community Organization','Shelter','Volunteer Organization'] },
  address: { type: String, required: true, trim: true, maxlength: 250 },
  city: { type: String, required: true, trim: true, maxlength: 80 },
  district: { type: String, required: true, trim: true, maxlength: 80 },
  isActive: { type: Boolean, default: true, index: true }
}, { timestamps: true });

userSchema.set('toJSON', { transform: (_doc, ret) => { delete ret.password; delete ret.__v; return ret; } });
export default mongoose.model('User', userSchema);
