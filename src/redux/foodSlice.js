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
        modal: undefined,
        controlModal: false,
        controlFoodDrop: false,
        filter: [],
        filterText:"fruits"
    },
    reducers: {
        getSingleFood: (state, action) => {
            state.singleFood = state.foods.find(el => el.id == action.payload);
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
        delFavFood: (state, action) => {
            state.favourites.foods = state.favourites.foods.filter(item => item.id !== action.payload);
            state.foods = state.foods.filter(item => {
                if(item.id === action.payload){
                    item.favourite = false;
                }
                return item
            })
        },
        addQuantity: (state, action) => {
            state.singleFood.quantity = action.payload;
        },
        pushFoods: (state, action) => {
            state.buy.foods.push(action.payload);
        },
        pushFavFoods: (state, action) => {
            state.favourites.foods.push(action.payload);
        },
        addModalItem: (state, action) => {
            state.modal = action.payload;
        },
        setControlModal: (state, action) => {
            state.controlModal = action.payload;
        },
        setControlFoodDrop: (state, action) => {
            state.controlFoodDrop = action.payload;
        },
        wishlist: (state, action) => {
            state.foods = state.foods.filter(item => {
                if(item.id === action.payload){
                    item.favourite = true
                }
                return item
            })
            state.filter = state.foods.filter(item => item.category === state.filterText);
        },
        filterData: (state, action) => {
            state.filterText = action.payload
            state.filter = state.foods.filter(item => item.category === action.payload);
        }
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
    getSubtotal,
    addModalItem,
    setControlModal,
    setControlFoodDrop,
    delFavFood,
    pushFavFoods,
    wishlist,
    filterData
} = foodSlice.actions;
export default foodSlice.reducer;