import React from 'react';
import {Link} from "react-router-dom";

const ProductFresh = () => {
    const fresh = [
        {
            title: 'Joobie Ice Cream',
            sale: true,
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner1.jpg?v=1565666027'
        },
        {
            title: 'Fresh Guava Juice',
            sale: null,
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner2.jpg?v=1565666027'
        },
        {
            title: 'Fresh Vegetables',
            sale: null,
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner3.jpg?v=1565666027'
        },
    ]

    return (
        <div className='product__fresh fresh'>
            <ul className='fresh__list row between'>
                {fresh.map((item, index) => (
                    <li className='fresh__item item'>
                        <img src={item.img} />
                        <div className='item__titles'>
                            <span className='item__title'>{item.title}</span>
                            {item.sale !== null ? (
                                <span className='item__sale'>Sale Off <span>25%</span></span>
                            ) : (<></>)}
                            <Link className='item__btn' to='/'>Shop Now</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFresh;