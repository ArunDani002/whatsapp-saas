const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    ownerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      enum: ["FREE", "STARTER", "PRO"],
      default: "FREE",
    },
    role: {
      type: String,
      enum: ["BUSINESS", "ADMIN"],
      default: "BUSINESS",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);