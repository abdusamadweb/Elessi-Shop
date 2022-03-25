import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addModalItem, pushFavFood, setControlModal, wishlist} from "../../redux/foodSlice";

const CartSlide = ({
    item,
    transX,
    trans,
    setTrans,
    transU,
    setTransU,
}) => {

    const  dispatch = useDispatch()
    const eyeClickHandler = () => {
        dispatch(setControlModal(true))
        dispatch(addModalItem(item))
    }

    function likeHandler(){
        if(!item.favourite){
            dispatch(pushFavFood(item))
        }
        dispatch(wishlist(item.id))
    }

    return (
        <li className='single__item item' style={transX}>
            <div className='item__imgs'>
                <div className='item__like row between'>
                    {item.sale !== null ? <span className='sale'>-20%</span> : <span />}
                    <Link to={item.favourite ? "/wishlist" : "/"} onClick={ likeHandler}>

                        {
                            item.favourite ?
                                <i className="fas fa-heart" />
                                :      <i className="fal fa-heart" />
                        }
                    </Link>
                </div>
                <div className='item-hover'>
                    <div><i className="far fa-eye" onClick={eyeClickHandler} /></div>
                </div>
                <Link to={`/single/${item.id}`}>
                    <img
                        className='item__img'
                        src={item.images[1]}
                    />
                </Link>
            </div>
            <div className='item__titles between'>
                <div>
                    <Link className='item__title' to={`/single/${item.id}`}>{item.name}</Link>
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
                            <span />
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
                        <i className="far fa-angle-left" />
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
                        <i className="far fa-angle-right" />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartSlide;