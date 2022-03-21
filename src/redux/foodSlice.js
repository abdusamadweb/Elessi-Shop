import {createSlice} from "@reduxjs/toolkit";
import data from "../data/data";

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foods: data,
        singleFood: {
            name: '',
            price: 0,
            sale: null,
            images: [],
            quantity: 0,
        },
        favourites: {
            count: 0,
            foods: [],
        },
        buy: {
            total: 0,
            foods: [],
        },
    },
    reducers: {
        getSingleFood: (state, action) => {
            state.singleFood = state.foods.all.find(el => el.id == action.payload);
        },
        getFavFood: (state, action) => {
            state.foods.all.forEach(item => {
                if (item.favourites === true) {
                    state.favourites.foods.push(item);
                }
            })
        },
        getSubtotal: (state) => {
            state.buy.total = state.buy.foods.map(item => {
                if (item.sale !== null) {
                    return item.sale;
                } else {
                    return item.price;
                }
            }).reduce((a, b) => (a + b));
        },
        pushFavFood: (state, action) => {
            state.favourites.foods.push(action.payload);
        },
        addFavFood: (state, action) => {
            action.payload = true;
        },
        delFood: (state, action) => {
            state.buy.foods = state.buy.foods.filter(item => item.id !== action.payload);
        },
        addQuantity: (state, action) => {
            state.singleFood.quantity = action.payload;
        },
        pushFoods: (state, action) => {
            state.buy.foods.push(action.payload);
        },
    }
})

export const {
    getSingleFood,
    addQuantity,
    pushFoods,
    delFood,
    pushFavFood,
    getFavFood,
    addFavFood,
    getSubtotal
} = foodSlice.actions;
export default foodSlice.reducer;