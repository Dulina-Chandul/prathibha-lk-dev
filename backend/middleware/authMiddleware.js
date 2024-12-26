import jwt from "jsonwebtoken";
const verifyToken = (token, secret) => {
  if (!token) {
    return false;
  }

  return jwt.verify(token, secret);
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      from: "authMiddleware.js",
      message: "No header found",
    });
  }

  const token = authHeader.split(" ")[1];

  const payload = verifyToken(token, process.env.JWT_SECRET_KEY);

  req.user = payload;

  next();
};

export default authenticate;
