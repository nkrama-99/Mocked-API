import fruitsList from '../data/fruits';
import FoodNutrition from '../consts/FoodNutrition';

const getRandomFoods = (FoodType, qty) => {
    console.log(FoodType);
    console.log(qty);

    // returning test data
    const result: FoodNutrition[] = [];
    result.push({
        food: 'apple',
        category: 'fruits',
        servings: '100 g',
        calories: '2.3 mg',
        fat: '2.3 mg',
        saturatedFat: '2.3 mg',
        transFat: '2.3 mg',
        cholesterol: '2.3 mg',
        sodium: '2.3 mg',
        carbohydrate: '2.3 mg',
        sugars: '2.3 mg',
        fibre: '2.3 mg',
        protein: '2.3 mg'
    });

    result.push({
        food: 'banana',
        category: 'fruits',
        servings: '100 g',
        calories: '2.3 mg',
        fat: '2.3 mg',
        saturatedFat: '2.3 mg',
        transFat: '2.3 mg',
        cholesterol: '2.3 mg',
        sodium: '2.3 mg',
        carbohydrate: '2.3 mg',
        sugars: '2.3 mg',
        fibre: '2.3 mg',
        protein: '2.3 mg'
    });

    return result;
};

export default getRandomFoods;
