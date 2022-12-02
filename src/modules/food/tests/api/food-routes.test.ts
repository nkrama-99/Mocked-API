import app from '../../../../../app';
let request = require('supertest');

describe('## food/nutrition api endpoints', () => {
    describe('GET /food/nutrition/', () => {
        it('should return a user', async () => {
            const qty = 1;
            const response = await request(app).get(`/food/nutrition/`);

            const food = response.body[0];

            expect(food).toHaveProperty('food');
            expect(food).toHaveProperty('category');
            expect(food).toHaveProperty('servings');
            expect(food).toHaveProperty('calories');
            expect(food).toHaveProperty('saturatedFat');
            expect(food).toHaveProperty('transFat');
            expect(food).toHaveProperty('cholesterol');
            expect(food).toHaveProperty('sodium');
            expect(food).toHaveProperty('carbohydrate');
            expect(food).toHaveProperty('sugars');
            expect(food).toHaveProperty('fibre');
            expect(food).toHaveProperty('protein');
        });
    });

    // describe('GET /courses/qty', () => {
    //     const qty = 2;

    //     it('should return courses with the given quantity of courses', async () => {
    //         const response = await request(app).get(`/courses/${qty}`);
    //         expect(response.body.length).toEqual(qty);
    //     });
    // });
});