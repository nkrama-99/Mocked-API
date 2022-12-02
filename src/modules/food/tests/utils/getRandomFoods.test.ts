import getRandomFoods from '../../utils/getRandomFoods';
import FoodEnum from '../../consts/FoodEnum';

describe('get random fruits', () => {
    it('should return a list of random fruit items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Fruits, 4);
        expect(res.length).toBe(amount);
    });
});

describe('get random dairy', () => {
    it('should return a list of random dairy items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Dairy, 4);
        expect(res.length).toBe(amount);
    });
});
