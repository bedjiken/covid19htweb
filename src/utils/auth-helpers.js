import jwt from "jsonwebtoken";
import cookie from "cookie";

export const expirationTime = 60 * 60 * 3; // 3 hours * 24 * 3; // 60 * 60 = 1h

export const serializeCookie = (name, data) => {
  const serialized = cookie.serialize(name, data, {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: expirationTime, // 3 days
    httpOnly: true,
    path: "/",
  });
  return serialized;
};

export const jwtSigner = (data, jwtSecret = process.env.JWT_SECRET) =>
  jwt.sign(data, jwtSecret, {
    expiresIn: expirationTime, // 50 minutes
  });
