import { verify } from "../utils/jwtservice";

export const gatedAccess = (req: any, res: any, next: any) => {
  const jwtCookie = req.cookies.jwt;
  const payload = verify(jwtCookie);
  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.redirect("/");
  }
};
