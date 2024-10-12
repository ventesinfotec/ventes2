require('dotenv').config();
const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

// it is local url 
const DB_URL = 'mongodb+srv://akshat:Akshat01@atlascluster.w2v7p.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';
// it is mongodb url
const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try { 
    await mongoose.connect(MONGO_URI);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDB;
