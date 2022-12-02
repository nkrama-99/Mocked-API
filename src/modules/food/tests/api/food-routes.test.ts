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

        it('should return fruits with the given quantity of fruits', async () => {
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

        it('should return dairy with the given quantity of dairy', async () => {
            const response = await request(app).get(`/food/nutrition/dairy/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});

describe('food/nutrition/vegetables api endpoints', () => {
    describe('GET /food/nutrition/vegetables', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/food/nutrition/vegetables`);

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

    describe('GET /food/nutrition/vegetables/qty', () => {
        const qty = 4;

        it('should return vegetables with the given quantity of vegetables', async () => {
            const response = await request(app).get(`/food/nutrition/vegetables/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});

describe('food/nutrition/grains api endpoints', () => {
    describe('GET /food/nutrition/grains', () => {
        it('should return a user', async () => {
            const response = await request(app).get(`/food/nutrition/grains`);

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

    describe('GET /food/nutrition/grains/qty', () => {
        const qty = 4;

        it('should return grains with the given quantity of grains', async () => {
            const response = await request(app).get(`/food/nutrition/grains/${qty}`);
            expect(response.body.length).toEqual(qty);
        });
    });
});