import mongoose, { ConnectionStates } from 'mongoose';

const connection: { isConnected: ConnectionStates | null } = { isConnected: null };

const connectMongo = async () => {
  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || '');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectMongo;
