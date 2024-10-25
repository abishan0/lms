import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    printYear: Number,
    category: String,
    image: String,
    title: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
