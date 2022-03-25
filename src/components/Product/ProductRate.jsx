import React from 'react';
import {Link} from "react-router-dom";

const ProductRate = ({ foods }) => {

    const getItems = (items) => {
        return (
            items.map((item, index) => (
                <li className='rate__item item row' key={index}>
                    <Link to={`/single/${item.id}`}><img src={item.images[0]} /></Link>
                    <div>
                        <Link to={`/single/${item.id}`}><span className='item__title'>{item.name}</span></Link>
                        {item.sale !== null ? (
                            <div className='row align-center'>
                                <span className='item__sale'>${item.sale}.00</span>
                                <span className='item__under'>${item.price}.00</span>
                            </div>
                        ) : (<span className='item__price'>${item.price}.00</span>)}
                    </div>
                </li>
            ))
        );
    }

    return (
        <div className='product__rate rate'>
            <ul className='rate__list row'>
                <li className='rate__items col-md-4'>
                    <h3 className='rate__title'>Top Rated</h3>
                    <ul>
                        {getItems(foods.slice(0, 2))}
                    </ul>
                </li>
                <li className='rate__items col-md-4'>
                    <h3 className='rate__title'>Best Selling</h3>
                    <ul>
                        {getItems(foods.slice(2, 4))}
                    </ul>
                </li>
                <li className='rate__items col-md-4'>
                    <h3 className='rate__title'>On Sale</h3>
                    <ul>
                        {getItems(foods.slice(4, 6))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ProductRate;