//Import the mongoose module
import mongoose from 'mongoose';

//Set up default mongoose connection
const mongoPath = 'mongodb://heroku_0kx140p8:1a3ablntpgbgmleif9r1jo9tk@ds137508.mlab.com:37508/heroku_0kx140p8';
mongoose.connect(mongoPath, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('connected', async function() {
    // we're connected!
    console.log(`Fliqpay API connected to ${mongoPath}`);
  });
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default mongoose;