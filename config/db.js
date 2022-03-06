const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'});
const URI = process.env.MONGOOSE_URI;

const connectDB = async() =>{
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connected to DB');
    } catch (error) {
        console.log('Connect to DB false');
        process.exit(1);
    }
}

module.exports = connectDB;