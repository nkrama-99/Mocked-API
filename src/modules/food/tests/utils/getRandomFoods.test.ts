import getRandomFoods from '../../utils/getRandomFoods';

describe('get random foods', () => {
    it('should return a list of random food items', () => {
        const amount = 4;
        const res = getRandomFoods('fruits', 1);
        console.log(res);
        expect(res.length).toBe(amount);
    });
});