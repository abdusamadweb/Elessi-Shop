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
            foods: [
                {
                    id: 5,
                    name: 'Basil Pesto',
                    price: 20,
                    sale: null,
                    images: [
                        'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a.jpg?v=1565594123',
                        'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420.jpg?v=1565594123'
                    ],
                    quantity: 1
                },
                {
                    id: 1,
                    name: 'Banana',
                    price: 8,
                    sale: null,
                    images: [
                        'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas.jpg?v=1565594302',
                        'https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9.jpg?v=1565594302'
                    ],
                    quantity: 1
                },

            ],
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