import React from 'react';
import './Categories.scss';
import {Link} from "react-router-dom";

const Categories = () => {
    const categories = [
        {
            title: 'Fruits',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat7.jpg?v=1565666027'
        },
        {
            title: 'Milks & Creams',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat5.jpg?v=1565666027'
        },
        {
            title: 'Vegetables',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat6.jpg?v=1565666027'
        },
        {
            title: 'Nut Gifts',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat1.jpg?v=1565666027'
        },
        {
            title: 'Butter & Eggs',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat4.jpg?v=1565666027'
        },
        {
            title: 'Fresh Meats',
            img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-cat3.jpg?v=1565666027'
        },
    ]

    return (
        <div className='categories'>
            <div className="container">
                <h2>Top Categories</h2>
                <ul className='categories__list row between'>
                    {categories.map((item, index) => (
                        <li className='categories__item item' key={index}>
                            <Link to='category'>
                                <img src={item.img} />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;