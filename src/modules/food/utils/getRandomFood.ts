import Food from '../consts/Food';

const getRandomFood = (): Food[] => {
    const food: Food[] = [];
    food.push({
        name: 'orange',
        category: 'fruit',
        calories: '144',
        protein: '1.10 mg',
        sugar: '24.32 g',
    })
    food.push({
        name: 'apple',
        category: 'fruit',
        calories: '124',
        protein: '1.18 mg',
        sugar: '23.5 g',
    })
    return food;
};

export default getRandomFood;
