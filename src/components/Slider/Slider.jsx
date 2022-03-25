import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import './Slider.scss';

export default class Fade extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        const slider = [
            {
                title: 'Fresh Hand-Picked Vegetables Everyday!',
                img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-slider1.jpg?v=1565666027'
            },
            {
                title: 'Fresh vegetables Sale up to 30% Off',
                img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-slider2.jpg?v=1565666027'
            },
            {
                title: 'Fresh Lemon discount up 40% off',
                img: 'https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-slider3.jpg?v=1565666027'
            },
        ]

        return (
            <div className='slider'>
                <Slider {...settings}>
                    {slider.map((item, index) => (
                        <div className='slider__inner' key={index}>
                            <div className='slider__titles center-absolute'>
                                <span className='slider__txt'>ELESSI STORE</span>
                                <h2 className='slider__title'>{item.title}</h2>
                                <Link class='slider__btn' to='/'>SHOP NOW</Link>
                            </div>
                            <img className='slider__img' src={item.img}/>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}