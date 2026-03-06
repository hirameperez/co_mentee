import express, {Request, Response} from 'express';
import apiRouter from './routes';

const app = express();

app.use("/api", apiRouter);

app.get('/', (req: Request, resp: Response ) => {
  resp.send('Hello world');
});

export default app;