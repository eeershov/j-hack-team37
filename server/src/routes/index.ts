import { NextFunction, Router, Request, Response } from "express";

const router = Router();

function getNothing(_req: Request, res: Response, _next: NextFunction) {
  res.send({'data':'Server says: you get nothing!'});
}


router.get('/', getNothing);

export default router;
