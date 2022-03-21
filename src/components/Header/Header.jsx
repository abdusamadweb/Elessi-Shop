import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import Search from "../../assets/icons/Search";
import Nav from "./Nav";
import {useSelector} from "react-redux";
import ModalBg from "../UI/ModalIem/ModalBg";
import FoodDrop from "../UI/FoodDrop/FoodDrop";

const Header = () => {
    const favourites = useSelector((state) => state.food.favourites.foods.length);
    const basket = useSelector((state) => state.food.buy.foods.length);

    const [modal, setModal] = useState(false);
    const dropStyle = {
        transform: 'translateX(0)'
    }

    return (
        <div className='header'>
            <ModalBg modal={modal} setModal={setModal} />
            <FoodDrop modal={modal} setModal={setModal} dropStyle={dropStyle} />
           <div className='container scroll'>
               <div className="header__inner row between align-center">
                   <Link to='/'>
                       <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-logo_500x.png?v=1565666026" alt="logo" width='140'/>
                   </Link>
                   <form className='header__form form row'>
                       <input className='form__inp' type="search" placeholder='Search for product' />
                       <button className='form__btn'>
                           <Search />
                       </button>
                   </form>
                   <ul className='header__list row'>
                       <li className='header__item'><i className="fal fa-user-circle"></i></li>
                       <li className='header__item'>
                           <i className="fal fa-heart"></i>
                           <span className='count'><span className='center-absolute'>{favourites}</span></span>
                       </li>
                       <li onClick={() => setModal(true)} className='header__item'>
                           <i className="fal fa-shopping-bag"></i>
                           <span className='count'><span className='center-absolute'>{basket}</span></span>
                       </li>
                   </ul>
               </div>
           </div>
           <Nav />
        </div>
    );
};

export default Header;