import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('connected to db'))
    .catch(() => console.log('db connection error occured'));

export default mongoose.connection;