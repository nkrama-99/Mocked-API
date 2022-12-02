import getRandomFoods from '../../utils/getRandomFoods';
import FoodEnum from '../../consts/FoodEnum';

describe('get random foods', () => {
    it('should return a list of random food items', () => {
        const amount = 4;
        const res = getRandomFoods(FoodEnum.Fruits, 4);
        expect(res.length).toBe(amount);
    });
});