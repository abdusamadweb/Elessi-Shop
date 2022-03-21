import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './FoodDrop.scss';
import {delFood, getSubtotal} from "../../../redux/foodSlice";

const FoodDrop = ({
    modal,
    dropStyle,
    setModal,
}) => {
    const dispatch = useDispatch();

    const subtotal = useSelector((state) => state.food.buy.total);
    const buyFoods = useSelector((state) => state.food.buy.foods);

    dispatch(getSubtotal());

    const removeFood = (e) => {
        dispatch(delFood(e));
    }

    const [value, setValue] = useState(1);

    const subtotalLineStyle = {
        width: `${subtotal}%`
    }

    return (
        <div className="drop" style={modal === true ? dropStyle : {}}>
            <div className="drop__header row center align-center">
                <span className='drop__title'>YOUR CART</span>
                <button onClick={() => setModal(false)} className='close'>
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <div className="drop__body">
                {buyFoods.length !== 0 ? (
                    <>
                        <ul className='drop__list'>
                        {buyFoods.map((item, index) => (
                            <li className='drop__item item row between' key={index}>
                                <div className='row align-center'>
                                    <img src={item.images[0]} />
                                    <div className='item__titles row between'>
                                        <span className='item__title'>{item.name}</span>
                                        <span className='item__price'>
                                                ${item.sale !== null ? item.sale : item.price}.00
                                            </span>
                                    </div>
                                </div>
                                <form className='item__form form'>
                                    <label className='row'>
                                        <input className='form__inp' type="number" value={item.quantity} />
                                        <div>
                                            <button
                                                onClick={() => setValue(value - 1)}
                                                className='form__add'
                                                type='button'>-</button>
                                            <button
                                                onClick={() => setValue(value + 1)}
                                                className='form__add'
                                                type='button'>+</button>
                                        </div>
                                    </label>
                                    <button onClick={() => removeFood(item.id)} className='btn' type='button'>Remove</button>
                                </form>
                            </li>
                        ))}
                    </ul>
                        <div className='drop__subtotal subtotal'>
                            <div className='subtotal__titles row between align-center'>
                                <span className='subtotal__title'>Subtotal</span>
                                <span className='subtotal__price'>${subtotal}.00</span>
                            </div>
                            <div className='subtotal__lines relative-p'>
                                <div className='subtotal__line'>
                                    <span className='subtotal__line-txt'>Spend ${200 - subtotal}.00 more to reach FREE SHIPPING!</span>
                                    <span className='subtotal__line-width' style={subtotalLineStyle} />
                                </div>
                                <span className='subtotal__car'>
                                    <i className="fal fa-car center-absolute" />
                                </span>
                            </div>
                            <div className='subtotal__btns'>
                                <button className='subtotal__btn'>VIEW CART</button>
                                <button className='subtotal__btn'>CHECK OUT</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <span className='txt'>No products in the cart.</span>
                        <p>Free Shipping on All Orders Over $200</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default FoodDrop;