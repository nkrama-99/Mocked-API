import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomFoods from '../utils/getRandomFoods';
import FoodEnum from '../consts/FoodEnum';

module.exports = function (app: core.Express) {
    /**
     * @openapi
     * "/food/nutrition":
     *   get:
     *     tags:
     *       - Food
     *     summary: Obtain an array of food with their nutrients
     *     responses:
     *       '200':
     *         description: OK
     *         schema:
     *           $ref: '#/definitions/MockFoodNutrition'
     */
    app.get('/food/nutrition', (req: Request, res: Response) => {
        let dummyQty = 10;
        const food = getRandomFoods(FoodEnum.Fruits, dummyQty);
        res.json(food);
    });
};
