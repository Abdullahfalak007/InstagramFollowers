const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create new user
  const user = new User({
    name,
    email,
    password,
  });

  await user.save();

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

module.exports = { registerUser, loginUser };
