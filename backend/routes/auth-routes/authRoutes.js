import express from "express";
import {
  registerUser,
  loginUser,
} from "../../controllers/auth-controller/authController.js";
import authenticate from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authenticate, (req, res) => {
  const user = req.user;

  return res.status(200).json({
    success: true,
    from: "authRoutes.js",
    message: "User is authenticated",
    data: {
      user,
    },
  });
});

export default router;
