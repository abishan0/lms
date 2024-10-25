import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book_route.js';  // Correct import for the route
import userRoute from './route/user_route.js';  // Correct import for the route

const app = express();

app.use(cors());  
app.use(express.json());

// Initialize dotenv
dotenv.config(); 

const PORT = process.env.PORT || 4001;  // Set to 4001 if that's what you want
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Middleware to parse JSON
app.use(express.json());

// Define routes  
app.use('/book', bookRoute); // Ensure the correct route is used
app.use('/user', userRoute); // Ensure the correct route is used

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
