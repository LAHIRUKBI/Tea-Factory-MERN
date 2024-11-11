import User from '../model/signup.model.js';
import bcrypt from 'bcrypt';


// Signup method
export const signup = async (req, res, next) => {
  console.log("Signup request received with data:", req.body); // Log the incoming request
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use, please choose a different one.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    console.log("User created successfully!"); // Confirm user creation
    res.status(201).json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    console.error("Signup error:", error); // Log any signup errors
    next(error);
  }
};

