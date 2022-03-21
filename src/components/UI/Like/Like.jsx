import React from 'react';
import {useDispatch} from "react-redux";
import {addFavFood, pushFavFood} from "../../../redux/foodSlice";

const Like = ({ item }) => {

    const dispatch = useDispatch();
    const pushFav = (el) => {
        dispatch(pushFavFood(el));
    }
    const addFav = (el) => {
        dispatch(addFavFood(el));
    }

    return (
        <div className='item__like row between'>
            {item.sale !== null ? (<span className='sale'>-20%</span>) : (<span/>)}
            <i className={`fal fa-heart ${!item.favourite ? 'd-block' : 'd-none'}`}
               onClick={() => {
                   pushFav(item)
                   addFav(item.favourite)
               }}
            />
            <i className={`fas fa-heart ${item.favourite ? 'd-block' : 'd-none'}`}
            />
        </div>
    );
};

export default Like;