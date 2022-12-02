import app from '../../../../../app';
let request = require('supertest');

describe('food/nutrition/fruits api endpoints', () => {
    describe('GET /food/nutrition/fruits', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/food/nutrition/fruits`);

            const food = response.body[0];

            expect(food).toHaveProperty('Food');
            expect(food).toHaveProperty('Category');
            expect(food).toHaveProperty('Servings');
            expect(food).toHaveProperty('Calories');
            expect(food).toHaveProperty('SaturatedFat');
            expect(food).toHaveProperty('TransFat');
            expect(food).toHaveProperty('Cholesterol');
            expect(food).toHaveProperty('Sodium');
            expect(food).toHaveProperty('Carbohydrate');
            expect(food).toHaveProperty('Sugars');
            expect(food).toHaveProperty('Fibre');
            expect(food).toHaveProperty('Protein');
        });
    });

    describe('GET /food/nutrition/fruits/qty', () => {
        const qty = 2;

        it('should return courses with the given quantity of courses', async () => {
            const response = await request(app).get(`/food/nutrition/fruits/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});

describe('food/nutrition/dairy api endpoints', () => {
    describe('GET /food/nutrition/dairy', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/food/nutrition/dairy`);

            const food = response.body[0];

            expect(food).toHaveProperty('Food');
            expect(food).toHaveProperty('Category');
            expect(food).toHaveProperty('Servings');
            expect(food).toHaveProperty('Calories');
            expect(food).toHaveProperty('Saturated Fat');
            expect(food).toHaveProperty('Trans Fat');
            expect(food).toHaveProperty('Cholesterol');
            expect(food).toHaveProperty('Sodium');
            expect(food).toHaveProperty('Carbohydrate');
            expect(food).toHaveProperty('Sugars');
            expect(food).toHaveProperty('Fibre');
            expect(food).toHaveProperty('Protein');
        });
    });

    describe('GET /food/nutrition/dairy/qty', () => {
        const qty = 3;

        it('should return courses with the given quantity of courses', async () => {
            const response = await request(app).get(`/food/nutrition/dairy/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});