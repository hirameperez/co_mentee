import express, {Request, Response} from 'express';
import apiRouter from './routes';

const app = express();

app.use(apiRouter);

app.get('/', (req: Request, res: Response) =>{
	res.status(200).send('Hello world');
});

export default app;
