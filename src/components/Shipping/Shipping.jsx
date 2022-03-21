import React from 'react';
import './Shipping.scss';

const Shipping = () => {
    const ship = [
        {
            icon: 'fal fa-plane',
            title: 'Free Shipping',
            desc: 'Free Shipping for all US order'
        },
        {
            icon: 'fal fa-user-headset',
            title: 'Support 24/7',
            desc: 'You have 30 days to Return'
        },
        {
            icon: 'far fa-sync-alt',
            title: '100% Money Back',
            desc: 'We support 24h a day'
        },
        {
            icon: 'fal fa-gift',
            title: 'Payment Secure',
            desc: 'We ensure secure payment'
        },
    ]

    return (
        <div className='ship'>
            <div className="container">
                <ul className='ship__list row between'>
                    {ship.map((item, index) => (
                        <li className='ship__item item' key={index}>
                            <i className={item.icon}></i>
                            <span className='item__title'>{item.title}</span>
                            <p className='item__desc'>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Shipping;