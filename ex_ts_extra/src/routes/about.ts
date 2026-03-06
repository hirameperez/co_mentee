import { Router, Request, Response } from 'express';

const aboutRouter = Router();

aboutRouter.get('/', (req: Request, res: Response) => {
  res.json({
    name: "Dilan",

  });
});

export default aboutRouter;
