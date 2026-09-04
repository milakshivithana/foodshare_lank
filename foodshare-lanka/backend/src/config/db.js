import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured');
  if (uri.includes('<your-cluster-host>') || uri.includes('username:password')) {
    throw new Error(
      'MONGODB_URI still uses the example value. Set it to your real MongoDB Atlas connection string in backend/.env.'
    );
  }
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(uri);
  } catch (error) {
    throw new Error(
      `MongoDB connection failed for ${mongoose.connection.host || 'the configured host'}. ` +
        'Check that MONGODB_URI is correct and that your IP address is allowed in MongoDB Atlas Network Access.',
      { cause: error }
    );
  }
  console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
}
