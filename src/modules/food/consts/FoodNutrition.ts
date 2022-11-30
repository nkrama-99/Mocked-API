/**
 * @openapi
 * definitions:
 *   MockUsers:
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         food:
 *           type: string
 *           example: d392a495-3f4c-4660-a896-dce057afbbd4
 *         category:
 *           type: string
 *           example: Aaron Rackley
 *         servings:
 *           type: string
 *           example: john.doe@example.com
 *         calories:
 *           type: string
 *           example: https://cloudflare-ipfs.com/ipfs/Qmd  3W5hgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/597.jpg
 *         saturatedFat:
 *           type: string
 *           example: password
 *         transFat:
 *           type: string
 *           example: '1984-05-21T00:02:11.497Z'
 *         cholesterol:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         sodium:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         carbohydrate:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         sugars:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         fibre:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 *         protein:
 *           type: string
 *           example: '2022-09-22T16:03:17.885Z'
 */

type FoodNutrition = {
    food: string,
    category: string,
    servings: string,
    calories: string,
    fat: string,
    saturatedFat: string,
    transFat: string,
    cholesterol: string,
    sodium: string,
    carbohydrate: string,
    sugars: string,
    fibre: string,
    protein: string,
};

export default FoodNutrition;