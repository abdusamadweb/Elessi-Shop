import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {pushFoods} from "../../../redux/foodSlice";
import {useDispatch, useSelector} from "react-redux";

const ModalItem = () => {
    const food = useSelector((state) => state.food.singleFood);
    const currentItem = useSelector(state => state.food.modal)
    const modal = useSelector(state => state.food.controlModal);

    const dispatch = useDispatch();
    const pushItem = () => {
        dispatch(pushFoods(food))
    }

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

    const [modalTrans, setModalTrans] = useState(0);
    const modalTransX = { transform: `translateX(${modalTrans}%)` }

    return (
        <div>
            {currentItem !== undefined ?
                <div className={`item__modal modal center-absolute ${modal ? 'modal-active' : 'd-none'}`}>
                    <div className='modal__imgs relative-p'>
                        <img style={modalTransX} src={currentItem.images[0]} />
                        <img style={modalTransX} src={currentItem.images[1]} />
                        <div className='arrows row between center-absolute'>
                            <button
                                onClick={() => setModalTrans(modalTrans + 100)}
                                disabled={modalTrans === 0}
                            >
                                <i className="fal fa-angle-left" />
                            </button>
                            <button
                                onClick={() => setModalTrans(modalTrans - 100)}
                                disabled={modalTrans === -100}
                            >
                                <i className="fal fa-angle-right" />
                            </button>
                        </div>
                        <div className='item__like row between'>
                            <span className='sale'>-20%</span>
                            <i className='fal fa-heart' />
                        </div>
                    </div>
                    <div className='modal__desc desc'>
                        <span className='desc__title'>{currentItem.name}</span>
                        <span className='desc__price'><span>${currentItem.price}.00</span>${currentItem.sale}.00</span>
                        <p className='desc__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem, perferendis provident sunt veritatis.</p>
                        <Link className='desc__view' to='single'>view product details <i className="fal fa-angle-right" /></Link>
                        <div className='desc__avails'>
                            <span className='avail'>HURRY! ONLY <span>8</span> LEFT IN STOCK.</span>
                            <div className='line-bg'>
                                <div className='line'>
                                    <span className='left' />
                                    <span className='right' />
                                </div>
                            </div>
                        </div>
                        <div className='desc__times'>
                            <span className='desc__time'>0 <br/> <span>DAYS</span></span>
                            <span className='desc__time'>07 <br/> <span>HR</span></span>
                            <span className='desc__time'>33 <br/> <span>MIN</span></span>
                            <span className='desc__time'>{time} <br/> <span>SC</span></span>
                        </div>
                        <form className='desc__form form row align-center'>
                            <label>
                                <button className='form__add' type='button'>-</button>
                                <input className='form__inp' type="number" value={1}/>
                                <button className='form__add' type='button'>+</button>
                            </label>
                            <button onClick={() => dispatch(pushFoods(currentItem))} className='form__btn' type='button'>ADD TO CART</button>
                        </form>
                        <span className='desc__or'>— or —</span>
                        <Link className='desc__btn' to='/'>BUY IT NOW</Link>
                    </div>
                </div>
            : null}
        </div>
    );
};

export default ModalItem;