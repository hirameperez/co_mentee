import type {Router,  Request, Response} from 'express';
const express = require('express')
const router:  Router = express.Router();

router.get('/about', (req: Request, res: Response) =>{
    res.json({
        name: "Dilan",
        lastName: "Villada",
        age: 23,
        country: "Colombia",
        city: "Medellin"
    });
});

module.exports = router;