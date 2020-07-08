import { MEALS } from "../../data/data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initStates = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};


const mealsReducer = (state = initStates, action) => {
    switch (action.type) {
        case SET_FILTERS:
            const appliedFilters = action.filters;
            
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                } 

                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                } 

                if (appliedFilters.vagetarian && !meal.isVegatarian) {
                    return false;
                } 

                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }

                return true;
            });
            return {...state, filteredMeals: updatedFilteredMeals};

        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealID);

            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);

                return { ...state, favoriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealID);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }



        default:
            return state;
    }
    return state;
}

export default mealsReducer;