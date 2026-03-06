import {Router, Request, Response} from 'express';

const fibonacciRouter = Router();

fibonacciRouter.get('/:nth', (req: Request, res: Response) => {
  res.json({
    message: `Hello Fibonacci: ${req.params.nth}`
  });
});

export default fibonacciRouter;