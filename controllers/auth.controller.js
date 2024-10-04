import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .send({ success: false, msg: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    await newUser.save();
    generateTokenAndSetCookie(res, newUser._id);
    res.status(201).send({
      success: true,
      msg: "User created successfully",
      user: {
        ...newUser._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Login Route");
};

export const logout = async (req, res) => {
  res.send("Logout Route");
};
