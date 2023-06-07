import jwt from "jsonwebtoken";

export const sign = (payload: Record<string, unknown>) => {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
    expiresIn: "3 hours",
  });
};

export const verify = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY as string);
  } catch (e) {
    console.error(e);
    return false;
  }
};
