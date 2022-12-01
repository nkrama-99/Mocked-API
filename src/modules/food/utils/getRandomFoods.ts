import fruits from '../data/fruits';

import FoodNutrition from '../consts/FoodNutrition';
import FoodEnum from '../consts/FoodEnum';
import { getRandomSubArray } from '../../../utils/arrays';

const getRandomFoods = (FoodType, qty) => {
    console.log("Food Type:" + FoodType);
    console.log(qty);

    switch(FoodType) {
        case(FoodEnum.Fruits):
            return(getRandomSubArray(fruits, qty));
        case(FoodEnum.Beverages):
            return(getRandomSubArray(fruits, qty));
        case(FoodEnum.Dairy):
            return(getRandomSubArray(fruits, qty));
        case(FoodEnum.Grains):
            return(getRandomSubArray(fruits, qty));
        case(FoodEnum.Protein):
            return(getRandomSubArray(fruits, qty));
        case(FoodEnum.Vegetables):
            return(getRandomSubArray(fruits, qty));
    }
};

export default getRandomFoods;
