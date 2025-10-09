import jwt from "jsonwebtoken";

export const genToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    console.log("Token generation error:", error.message);
    return null;
  }
};
