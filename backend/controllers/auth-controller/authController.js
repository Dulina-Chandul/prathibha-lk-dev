import User from "../../models/User.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const { firstName, lastName, userName, userEmail, password, role } = req.body;

  const existingUser = await User.findOne({
    $or: [{ userEmail }, { userName }],
  });

  if (existingUser) {
    res.status(400).json({
      success: false,
      from: "authController.js",
      message: "Username or useremail already exist",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    userName,
    password: hashPassword,
    role,
  });

  await newUser.save();

  return res.status(201).json({
    success: true,
    from: "authController.js",
    message: "New user have been registered successfully",
  });
};

export { registerUser };
