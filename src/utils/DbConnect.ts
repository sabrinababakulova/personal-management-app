import mongoose from 'mongoose';
const AutoIncrementFactory = require('mongoose-sequence');
const connectMongo = async () => await mongoose.connect(process.env.MONGO_URI!);


export const AutoIncrement = AutoIncrementFactory(connectMongo);
export default connectMongo;
