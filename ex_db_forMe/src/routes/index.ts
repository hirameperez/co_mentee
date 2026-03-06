import { Router } from "express";
import charactersRouter from "./characters";

const apiRouter = Router();

apiRouter.use("/characters", charactersRouter);

export default apiRouter;


// docker run -p  6379:6379 --name redis 