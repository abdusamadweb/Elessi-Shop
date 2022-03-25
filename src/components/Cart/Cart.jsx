import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addModalItem, pushFavFood, setControlModal} from "../../redux/foodSlice";

const Cart = ({ item }) => {
    const { id, name, price, sale, images } = item;

    const  dispatch = useDispatch()
    const eyeClickHandler = () => {
        dispatch(setControlModal(true))
        dispatch(addModalItem(item))
    }

    return (
        <li className='seller__item item'>
            <div className='item__imgs'>
                <div className='item__like row between'>
                    {item.sale !== null ? <span className='sale'>-20%</span> : <span />}
                    <button onClick={() => dispatch(pushFavFood(item))}>
                        <i className="fal fa-heart" />
                    </button>
                </div>
                <div className='item-hover'>
                    <div><i className="far fa-eye" onClick={eyeClickHandler} /></div>
                </div>
                <Link to={`/single/${id}`}>
                    <img src={images[0]} />
                </Link>
            </div>
            <Link className='item__title' to={`single/${id}`}>{name}</Link>
            {sale !== null ? (
                <div className='row align-center'>
                    <span className='item__under'>${price}.00</span>
                    <span className='item__sale'>${sale}.00</span>
                </div>
            ) : (<span className='item__price'>${price}.00</span>)}

        </li>
    );
};

export default Cart;