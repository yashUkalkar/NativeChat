// Packages
import { Request, Response } from "express";

// DB methods
import { addNewUser, checkUserExists } from "../db/authQueries.js";

// Utils
import { hashPassword, matchPassword } from "../utils/hash.js";

// * Getting user data
const signInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // * Check if user exists
  const user = await checkUserExists(email, true);
  // If not then return resource not found error
  if (!user) {
    res.status(404).send("User not found. Try signing up for an account!");
  }
  // If exists check credentials
  else {
    const match = await matchPassword(password, user.password_hash);
    // If valid password return user details
    if (match) {
      const { password_hash, ...rest } = user;
      res.status(200).send(rest);
    }
    // Else return bad request error
    else res.status(401).send("Wrong password. Try again!");
  }
};

// * Adding user to DB
const signUpUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  // * Check if user exists
  const userExists = await checkUserExists(email);
  // If yes then return conflict error
  if (userExists) {
    res.status(409).send("User already exists!\nTry signing in!");
  } else {
    // * Add the user

    // Hash the password
    const passwordHash = await hashPassword(password);
    const user = await addNewUser(email, username, passwordHash);
    // Return user details when successful
    res.status(200).send(user);
  }
};

export const authController = {
  signInUser,
  signUpUser,
};
