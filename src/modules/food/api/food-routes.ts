import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomFoods from '../utils/getRandomFoods';
import FoodEnum from '../consts/FoodEnum';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/food":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of food with their nutrients (by default)
     *     responses:
     *       '200':
     *         description: An array of food and their nutrients
     *         schema:
     *           type: array
     *           items:
     *             type: object
     *             example: ['orange\fruit\144\1.10 mg\24.32 g']
     */
    app.get('/food', (req: Request, res: Response) => {
        let dummyQty = 10;
        const food = getRandomFoods(FoodEnum.Fruits, dummyQty);
        res.json(food);
    });
};
