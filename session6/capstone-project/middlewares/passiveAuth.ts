import { verify } from "../utils/jwtservice";

export const passiveAuth = (req: any, res: any, next: any) => {
  const jwtCookie = req.cookies.jwt;
  const payload = verify(jwtCookie);
  console.log("payload", payload);
  if (payload) {
    req.jwt = payload;
  }
  next();
};
