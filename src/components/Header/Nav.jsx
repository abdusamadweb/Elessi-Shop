import React from 'react';
import {categories} from "../../assets/scripts/navItems";
import {navItems} from "../../assets/scripts/navItems";
import {navItemsHover} from "../../assets/scripts/navItems";

const Nav = () => {

    return (
        <nav className='header__nav nav'>
            <div className="container row align-center relative-p">
                <div className="nav__category category">
                    <span className='category__title'>SHOP BY CATEGORIES</span>
                    <ul className='category__list'>
                        {categories.map((item, index) => (
                            <li className='category__item' key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <ul className='nav__list row'>
                    {navItems.map((item, index) => (
                        <li className='nav__item item' key={index}>
                            {item}
                            <ul className='item__hover hover'>
                                {navItemsHover.map((item, index) => (
                                    <li className='hover__item' key={index}>
                                        <span className='hover__title'>{item.title}</span>
                                        {item.items.map((item, index) => (
                                            <span className='hover__txt' key={index}>{item}</span>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;