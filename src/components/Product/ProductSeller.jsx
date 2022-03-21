import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ProductSellerList from "./ProductSellerList";
import Cart from "../Cart/Cart";

const ProductSeller = ({ like, setLikes, setModal }) => {
    const foods = useSelector((state) => state.food.foods);

    const [food, setFood] = useState(foods.fruits);
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
                fruits={foods.fruits}
                vegetables={foods.vegetables}
                milks={foods.milks}
                products={foods.products}
            />
            <ul className='seller__list row'>
                {food.map((item, index) => (
                    <Cart
                        key={index}
                        item={item}
                        like={like}
                        setLikes={setLikes}
                        setModal={setModal}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProductSeller;