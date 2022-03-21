import React from 'react';
import {Link} from "react-router-dom";
import {pushFoods} from "../../../redux/foodSlice";
import {useDispatch, useSelector} from "react-redux";

const ModalItem = ({
    foods,
    modal,
    modalStyle,
    modalTransX,
    modalTrans,
    setModalTrans,
    like,
    setLikes,
    time,
}) => {

    const food = useSelector((state) => state.food.singleFood);
    const dispatch = useDispatch();
    const pushItem = () => {
        dispatch(pushFoods(food))
    }

    return (
        <div className='item__modal modal' style={modal === true ? modalStyle : {}}>
            <div className='modal__imgs relative-p'>
                <img style={modalTransX} src="https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a.jpg?v=1565594123" alt=""/>
                <img style={modalTransX} src="https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420.jpg?v=1565594123" alt=""/>
                <div className='arrows row between center-absolute'>
                    <button
                        onClick={() => setModalTrans(modalTrans + 480)}
                        disabled={modalTrans === 0}
                    >
                        <i className="fal fa-angle-left"></i>
                    </button>
                    <button
                        onClick={() => setModalTrans(modalTrans - 480)}
                        disabled={modalTrans === -480}
                    >
                        <i className="fal fa-angle-right"></i>
                    </button>
                </div>
                <div className='item__like row between'>
                    <span className='sale'>-20%</span>
                    <i className={`fal fa-heart ${like && 'd-none'}`} onClick={() => setLikes(true)}></i>
                    <i className={`fas fa-heart ${!like && 'd-none'}`} onClick={() => setLikes(false)}></i>
                </div>
            </div>
            <div className='modal__desc desc'>
                <span className='desc__title'>Organic asda</span>
                <span className='desc__price'><span>$24.00</span>$20.00</span>
                <p className='desc__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dolorem, perferendis provident sunt veritatis.</p>
                <Link className='desc__view' to='single'>view product details <i className="fal fa-angle-right"></i></Link>
                <div className='desc__avails'>
                    <span className='avail'>HURRY! ONLY <span>8</span> LEFT IN STOCK.</span>
                    <span className='line'><span></span></span>
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
                    <button onClick={pushItem} className='form__btn' type='button'>ADD TO CART</button>
                </form>
                <span className='desc__or'>— or —</span>
                <Link className='desc__btn' to='/'>BUY IT NOW</Link>
            </div>
        </div>
    );
};

export default ModalItem;