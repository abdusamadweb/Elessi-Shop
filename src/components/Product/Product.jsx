import React, {useEffect, useState} from 'react';
import './Product.scss';
import {useSelector} from "react-redux";
import ModalBg from "../UI/ModalIem/ModalBg";
import ModalItem from "../UI/ModalIem/ModalItem";
import CartSlide from "../Cart/CartSlide";
import ProductSeller from "./ProductSeller";
import ProductFresh from "./ProductFresh";
import ProductRate from "./ProductRate";
import Sponsors from "./Sponsors";

const Product = () => {
    const foods = useSelector((state) => state.food.foods);

    const [trans, setTrans] = useState(0);
    const [transU, setTransU] = useState(0);

    // styles
    const transX = { transform: `translateX(${trans}px)` }
    const transY = { transform: `translateY(${transU}px)` }

    return (
        <div className='product'>
            <ModalBg />
            <ModalItem />
            <div className="container">
                <div className="product__slider slider between">
                    <ul className="slider__single single">
                        {foods.slice(2, 6).map((item, index) => (
                            <CartSlide
                                key={index}
                                item={item}
                                transX={transX}
                                trans={trans}
                                setTrans={setTrans}
                                transU={transU}
                                setTransU={setTransU}
                            />
                        ))}
                    </ul>
                    <ul className='slider__multi multi'>
                        {foods.slice(2, 6).map((item, index) => (
                            <li
                                className='multi__item'
                                style={transY}
                                key={index}
                            >
                                <img src={item.images[0]} />
                            </li>
                        ))}
                    </ul>
                </div>
                <ProductSeller />
                <ProductFresh />
                <ProductRate foods={foods} />
                <Sponsors />
            </div>
        </div>
    );
};

export default Product;