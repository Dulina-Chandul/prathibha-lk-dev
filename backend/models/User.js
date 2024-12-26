import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  userEmail: String,
  password: String,
  role: String,
});

export default mongoose.model("User", userSchema);
