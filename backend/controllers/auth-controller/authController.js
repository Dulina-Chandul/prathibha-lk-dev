import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    userEmail,
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

const loginUser = async (req, res) => {
  const { userEmail, password } = req.body;

  const checkUser = await User.findOne({ userEmail });
  console.log(checkUser);

  if (!checkUser || !(await bcrypt.compare(password, checkUser.password))) {
    return res.status(401).json({
      success: false,
      from: "authController.js",
      message: "Invalid Credentials",
    });
  }

  const accessToken = jwt.sign(
    {
      _id: checkUser._id,
      userName: checkUser.userName,
      userEmail: checkUser.userEmail,
      role: checkUser.role,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "120m",
    }
  );

  res.status(200).json({
    success: true,
    from: "authController.js",
    message: "User logged in successfully",
    data: {
      accessToken,
      user: {
        _id: checkUser._id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role,
      },
    },
  });
};

export { registerUser, loginUser };
