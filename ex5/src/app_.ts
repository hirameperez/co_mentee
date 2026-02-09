import type {Application, Request, Response, Router} from 'express';
const express = require('express');
const fibonacciRoutes: Router = require('./routes/fibonacci.routes.');
const aboutRoutes: Router =  require ('./routes/about.routes.js');


const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) =>{
    res.send('Hello World!');
});

app.use(aboutRoutes);
app.use(fibonacciRoutes);

app.use((req: Request, res: Response) =>{
    res.status(404).json({
        error: 'Route not found'
    });
});

module.exports = app;