import React from 'react';
import {Link} from "react-router-dom";
import Like from "../UI/Like/Like";
import ItemHover from "../UI/ItemHover/ItemHover";

const Cart = ({ item, like, setLikes, setModal }) => {
    const { id, name, price, sale, images } = item;

    return (
        <li className='seller__item item'>
            <div className='item__imgs'>
                <Like item={item} like={like} setLikes={setLikes} />
                <ItemHover setModal={setModal} />
                <Link to={`single/${id}`}>
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