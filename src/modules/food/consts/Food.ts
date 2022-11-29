/**
 * * @openapi
 * definitions:
 *   MockFood:
 *     type: objcts
 *     properties:
 *        name:
 *          type: string
 *          example: orange
 *        category:
 *          type: string
 *          example: fruit
 *        calories:
 *          type: string
 *          example: 144
 *        protein:
 *          type: string
 *          example: 1.10 mg
 *        sugar:
 *          type: string
 *          example: 24.32 g
 */
type Food = {
    name: string;
    category: string;
    calories: string;
    protein: string;
    sugar: string;
};

export default Food;
