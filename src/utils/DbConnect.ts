/* This is a database connection function*/
import mongoose from 'mongoose';
const AutoIncrementFactory = require('mongoose-sequence');
const connectMongo = async () => await mongoose.connect(process.env.MONGO_URI!);


const AutoIncrement = AutoIncrementFactory(connectMongo);
export default connectMongo;
