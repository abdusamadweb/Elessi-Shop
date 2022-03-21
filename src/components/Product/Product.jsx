import React, {useEffect, useRef, useState} from 'react';
import './Product.scss';
import data from "../../data/data";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ModalBg from "../UI/ModalIem/ModalBg";
import ModalItem from "../UI/ModalIem/ModalItem";
import CartSlide from "../Cart/CartSlide";
import ProductSeller from "./ProductSeller";
import ProductFresh from "./ProductFresh";
import ProductRate from "./ProductRate";
import Sponsors from "./Sponsors";

const Product = ({ like, setLikes, modal, setModal }) => {
    const foods = useSelector((state) => state.food.foods);

    const [trans, setTrans] = useState(0);
    const [transU, setTransU] = useState(0);

    const [modalTrans, setModalTrans] = useState(0);
    const [time, setTime] = useState(60);

    const timer = () => {
        setTime(time - 1);
    }
    useEffect(() => {
        if (time <= 0) {
            return setTime(60);
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [time])


    // styles
    const transX = { transform: `translateX(${trans}px)` }
    const transY = { transform: `translateY(${transU}px)` }
    const modalStyle = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        zIndex: '20'
    }
    const modalTransX = { transform: `translateX(${modalTrans}px)` }

    return (
        <div className='product'>
            <ModalBg modal={modal} setModal={setModal} />
            <ModalItem
                foods={foods.products}
                modal={modal}
                modalStyle={modalStyle}
                modalTransX={modalTransX}
                modalTrans={modalTrans}
                setModalTrans={setModalTrans}
                like={like}
                setLikes={setLikes}
                time={time}
            />
            <div className="container">
                <div className="product__slider slider between">
                    <ul className="slider__single single">
                        {foods.products.map((item, index) => (
                            <CartSlide
                                item={item}
                                transX={transX}
                                trans={trans}
                                setTrans={setTrans}
                                transU={transU}
                                setTransU={setTransU}
                                setModal={setModal}
                                like={like}
                                setLikes={setLikes}
                            />
                        ))}
                    </ul>
                    <ul className='slider__multi multi'>
                        {foods.products.map((item, index) => (
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
                <ProductSeller like={like} setLikes={setLikes} setModal={setModal} />
                <ProductFresh />
                <ProductRate foods={foods} />
                <Sponsors />
            </div>
        </div>
    );
};

export default Product;