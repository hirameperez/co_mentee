import type {Router, Request, Response} from 'express';
const express = require('express');
const router: Router = express.Router();

function fibonacci(num: number): number{
    if(num <= 1){
        return num;
    }

    let prev: number = 0;
    let curr: number = 1;

    for(let i = 2; i <= num; i++ ){
        let next: number = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

router.get('/fibo/:nth', (req: Request, res: Response) => {
    const nth = parseInt(req.params.nth as string);

    if(isNaN(nth)){
        return res.status(400).json({
            error: 'the parameter must be a number'
        });
    }
    const result = fibonacci(nth);
    res.json({
        result,
    });
});

module.exports = router;

