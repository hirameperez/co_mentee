import { Router } from 'express';

import aboutRouter from './about';

import fibonacciRouter from './fibo';

const apiRouter = Router();

apiRouter.use('/about', aboutRouter);
apiRouter.use('/fibo', fibonacciRouter);

export default apiRouter;