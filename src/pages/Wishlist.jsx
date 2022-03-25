import React from 'react';
import '../components/Wishlist/Wishlist.scss';
import {useDispatch, useSelector} from "react-redux";
import {delFavFood, pushFoods} from "../redux/foodSlice";

const Wishlist = () => {
    const wishlist = useSelector(state => state.food.favourites.foods);

    const dispatch = useDispatch();

    return (
        <div className='wishlist'>
            <div className="container">
                <h2 className='wishlist__title'>Wishlist</h2>
                {wishlist.length !== 0 ? (
                    <div className="wishlist__inner">
                        <ul className='wishlist__navs row'>
                            <li className='wishlist__nav'>product name</li>
                            <li className='wishlist__nav'>unit price</li>
                            <li className='wishlist__nav'>stock status</li>
                        </ul>
                        <ul className='wishlist__list'>
                            {wishlist.map((item, index) => (
                                <li className='wishlist__item item row align-center' key={index}>
                                    <button onClick={() => dispatch(delFavFood(item.id))} className='item__del'><i className="fal fa-times" /></button>
                                    <img className='item__img' src={item.images[0]} />
                                    <span className='item__title'>{item.name}</span>
                                    {item.sale !== null ?
                                        <span className='item__price'>${item.sale}.00</span> :
                                        <span className='item__price'>${item.price}.00</span>
                                    }
                                    <span className='item__stock'>in stock</span>
                                    <button onClick={() => dispatch(pushFoods(item))} className='item__btn'>add to cart</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className='wishlist__no'>No products were added to the wishlist</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;