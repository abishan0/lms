import User from "../model/user_modal.js"; // Ensure the correct path and file name
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {  // Change 'sync' to 'async'
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });  // Use 'await' to fetch user
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const hashedPassword = await bcryptjs.hash(password, 8);  // Use 'bcrypt.hash' to hash the password
    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();  // Use 'await' to save the user
    res.status(201).json({ message: "User created successfully",user:{
      _id: createdUser._id,
      fullname: createdUser.fullname,
      email: createdUser.email,
    } });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // If both email and password are correct
    res.status(200).json({ 
      message: "Login Successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email
      },
    });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
