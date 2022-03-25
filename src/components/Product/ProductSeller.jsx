import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ProductSellerList from "./ProductSellerList";
import Cart from "../Cart/Cart";

const ProductSeller = () => {
    const foods = useSelector((state) => state.food.filter);

    const [food, setFood] = useState(foods.slice(0, 2));
    const [active, setActive] = useState(1);

    const getActive = (index) => {
        setActive(index);
    }

    const getFoods = (data) => {
        setFood(data);
    }

    return (
        <div className='product__seller seller'>
            <h2 className='seller__title'>Best Seller Product</h2>
            <ProductSellerList
                active={active}
                getActive={getActive}
                getFoods={getFoods}
                fruits={foods.slice(0, 2)}
                vegetables={foods.slice(2, 4)}
                milks={foods.slice(4, 6)}
                products={foods.slice(2, 6)}
            />
            <ul className='seller__list row'>
                {foods.map((item, index) => (
                    <Cart
                        key={index}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductSeller;