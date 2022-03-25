import React, {useEffect, useState} from 'react';
import '../components/SingleFood/SingleFood.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {addQuantity, getSingleFood, pushFoods} from "../redux/foodSlice";
import Cart from "../components/Cart/Cart";
import ModalBg from "../components/UI/ModalIem/ModalBg";
import ModalItem from "../components/UI/ModalIem/ModalItem";

const SingleFood = () => {
    const food = useSelector((state) => state.food.singleFood);
    const {name, price, sale, images, quantity,id} = food;

    const dispatch = useDispatch();

    const bestFoods = useSelector((state) => state.food.foods.slice(2, 6));

    const [count, setCount] = useState(1);
    const upCount = () => {
        setCount(count + 1)
        dispatch(addQuantity(count+1))
    }
    const downCount = () => {
        setCount(count - 1)
        dispatch(addQuantity(count-1))
    }
    const pushItem = () => {
        dispatch(pushFoods(food))
    }

    const params = useParams()
    useEffect(() => {
        dispatch(getSingleFood(params.id));
    }, [params.id])

    const [active, setActive] = useState(1);
    const getActive = (index) => {
        setActive(index);
    }

    const [transform, setTransform] = useState(0);
    const transformStyle = {
        transform: `translateX(${transform}%)`
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

    useEffect(()=> {
        window.scrollTo(0,235)
    },[id])




    return (
        <div className='single'>
            <ModalBg />
            <ModalItem />
            <div className='single__pagenation'>
                <div className="container">
                    <span className='txt'><Link to='/'>Home</Link> / <span>{name}</span></span>
                </div>
            </div>
            <div className="container">
                <div className="single__inner row">
                    <div className="single__imgs row">
                        <div className='single__imgs-active'>
                            <img
                                onClick={() => {
                                    getActive(1)
                                    transform !== 0 && setTransform(transform + 100)
                                }}
                                className={active === 1 ? 'active' : ''}
                                src={images[0]}
                            />
                            <img
                                onClick={() => {
                                    getActive(2)
                                    transform !== -480 && setTransform(transform - 100)
                                }}
                                className={active === 2 ? 'active' : ''}
                                src={images[1]}
                            />
                        </div>
                        <div className="single__imgs-slide">
                            {images.map((item, index) => (
                                <img className='img' style={transformStyle} src={item} key={index} />
                            ))}
                            <div className='arrows center-absolute row between'>
                                <button onClick={() => {
                                    setTransform(transform + 100)
                                    setActive(1)
                                }} disabled={transform === 0 && true} >
                                    <i className="fal fa-angle-left" />
                                </button>
                                <button onClick={() => {
                                    setTransform(transform - 100)
                                    setActive(2)
                                }} disabled={transform === -100 && true}>
                                    <i className="fal fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='modal__desc desc'>
                        <span className='desc__title'>{name}</span>
                        {sale !== null ? (
                            <><span className='desc__under'>${price}.00</span>
                                <span className='desc__sale'>${sale}.00</span></>
                        ) : (
                            <span className='desc__price'>${price}.00</span>
                        )}
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
                                <button onClick={downCount} className='form__add' type='button'>-</button>
                                <input className='form__inp' type="number" value={count}/>
                                <button onClick={upCount} className='form__add' type='button'>+</button>
                            </label>
                            <button onClick={pushItem} className='form__btn' type='button'>ADD TO CART</button>
                        </form>
                        <span className='desc__or'>— or —</span>
                        <Link className='desc__btn' to='/'>BUY IT NOW</Link>
                        <p className='desc__txt'>Order in the next <span>10 hours 2 minutes</span> to get it by <u>Monday 04/04/2022</u></p>
                        <img className='desc__visas' src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/safe-checkout_1_550x.png?v=1565594963" />
                        <div className='desc__social row'>
                            <span>Share on:</span>
                            <ul className='desc__social-list row'>
                                <li><a><i className="fab fa-facebook-f" /></a></li>
                                <li><a><i className="fab fa-twitter" /></a></li>
                                <li><a><i className="fab fa-google-plus-g" /></a></li>
                                <li><a><i className="fas fa-envelope" /></a></li>
                                <li><a><i className="fab fa-pinterest" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="single__wrapper">
                    <h2>Related product</h2>
                    <div className="seller">
                        <ul className='seller__list row'>
                            {bestFoods.map((item, index) => (
                                <Cart item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;