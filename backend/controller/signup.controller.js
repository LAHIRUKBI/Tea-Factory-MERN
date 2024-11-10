import User from '../model/signup.model.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    const { fullName, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create and save the new user
      const newUser = new User({ fullName, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error("Error during registration:", error); // Detailed logging
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  };
  
