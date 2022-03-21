import React from 'react';
import './Footer.scss';
import {Link} from "react-router-dom";

const Footer = () => {
    const social = [
        {
            icon: 'fab fa-facebook-f',
            bg: '#365493'
        },
        {
            icon: 'fab fa-twitter',
            bg: '#33CCFF'
        },
        {
            icon: 'fab fa-google-plus-g',
            bg: '#D44132'
        },
        {
            icon: 'fab fa-pinterest',
            bg: '#CB2027'
        },
        {
            icon: 'fab fa-instagram',
            bg: '#774430'
        },
    ]

    const footerTxts = [
        'Calista Wise 7292 Dictum Av.',
        'Antonio, Italy.',
        '(+01)-800-3456-88',
        'Nasathemes@Gmail.Com',
        'Elessi.Nasatheme.Com'
    ]

    const footerItems = [
        'Delivery Information',
        'Privacy Policy',
        'Terms & Condition',
        'Search Terms',
        'Order & Return',
        'Customer Service',
        'Privacy Policy',
        'Terms & Condition',
        'Best Seller',
        'Manufactures',
    ]

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner row align-center">
                    <div className='col-md-3'>
                        <Link className='footer__logo' to='/'>
                            <img src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-retina-logo.png?v=1565666026" alt="logo" width='140'/>
                        </Link>
                    </div>
                    <ul className='footer__social social row col-md-3'>
                        {social.map((item, index) => (
                            <li className='social__item'  style={{background: item.bg}}>
                                <i className={`${item.icon} icon center-absolute`}></i>
                            </li>
                        ))}
                    </ul>
                    <form className='footer__form form row between align-center col-md-6'>
                        <label className='row'>
                            <span className='form__title'>Newsletter</span>
                            <input className='form__inp' type="email" />
                        </label>
                        <button className='form__btn'>SUBSCRIBE</button>
                    </form>
                </div>
                <div className="footer__wrapper">
                    <ul className='footer__list row'>
                        <li className='col-md-3'>
                            <ul>
                                {footerTxts.map((item, index) => (
                                    <li className='footer__item' key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                        <li className='col-md-3'>
                            <ul>
                                {footerItems.slice(0, 5).map((item, index) => (
                                    <li className='footer__item' key={index}>
                                        <Link to='/'>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='col-md-3'>
                            <ul>
                                {footerItems.slice(5).map((item, index) => (
                                    <li className='footer__item' key={index}>
                                        <Link to='/'>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='col-md-3'>
                            <img src="https://www.mangalaridma.com/img/payhere_long_banner.png"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;