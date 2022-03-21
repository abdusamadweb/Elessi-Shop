import React from 'react';

const ProductSellerList = ({
    active,
    getActive,
    getFoods,
    fruits,
    milks,
    products,
    vegetables,
}) => {
    return (
        <ul className='seller__navs row center'>
            <li
                onClick={() => {
                    getActive(1)
                    getFoods(fruits)
                }}
                className={`seller__nav ${active === 1 ? 'active' : ''}`}
            >
                Fruits
            </li>
            <li
                onClick={() => {
                    getActive(2)
                    getFoods(vegetables)
                }}
                className={`seller__nav ${active === 2 ? 'active' : ''}`}
            >
                Vegetables
            </li>
            <li
                onClick={() => {
                    getActive(3)
                    getFoods(milks)
                }}
                className={`seller__nav ${active === 3 ? 'active' : ''}`}
            >
                Milk & Cream
            </li>
            <li
                onClick={() => {
                    getActive(4)
                    getFoods(products)
                }}
                className={`seller__nav ${active === 4 ? 'active' : ''}`}
            >
                Best Seller
            </li>
        </ul>
    );
};

export default ProductSellerList;