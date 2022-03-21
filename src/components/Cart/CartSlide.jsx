import React from 'react';
import {Link} from "react-router-dom";
import ItemHover from "../UI/ItemHover/ItemHover";
import Like from "../UI/Like/Like";

const CartSlide = ({
    item,
    transX,
    trans,
    setTrans,
    transU,
    setTransU,
    setModal,
    like,
    setLikes,
}) => {


    return (
        <li className='single__item item' style={transX}>
            <div className='item__imgs'>
                <ItemHover setModal={setModal} />
                <Like item={item} like={like} setLikes={setLikes} />
                <Link to={`/single/${item.id}`}>
                    <img
                        className='item__img'
                        src={item.images[1]}
                    />
                </Link>
            </div>
            <div className='item__titles between'>
                <div>
                    <Link className='item__title' to='single'>{item.name}</Link>
                    {item.sale !== null ? (
                        <div className='row align-center' style={{marginBottom: '1.5em'}}>
                            <span className='item__under'>${item.price}.00</span>
                            <span className="item__price">${item.sale}.00</span>
                        </div>
                    ) : (
                        <span className='item__price'>${item.price}.00</span>
                    )}
                    <div>
                        <div className='row between' style={{marginBottom: '1em'}}>
                            <span className='item__ava'>
                                Available:
                                <span>75</span>
                            </span>
                            <span className='item__ava'>
                                Already Sold:
                                <span>25</span>
                            </span>
                        </div>
                        <div className='item__line'>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className='item__btns'>
                    <button
                        className='item__btn'
                        onClick={() => {
                            setTrans(trans + 935)
                            setTransU(transU + 170)
                        }}
                        disabled={trans === 0 && true}
                    >
                        <i className="far fa-angle-left"></i>
                        Prev deal
                    </button>
                    <button
                        className='item__btn'
                        onClick={() => {
                            setTrans(trans - 935)
                            setTransU(transU - 170)
                        }}
                        disabled={trans === -2805 && true}
                    >
                        Next deal
                        <i className="far fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartSlide;