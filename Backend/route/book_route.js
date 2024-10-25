import express from 'express';
import { getBook } from '../controller/book_controller.js'; // Correct path to controller

const router = express.Router();

// Define the route
router.get("/", getBook);

// Export the router
export default router;
