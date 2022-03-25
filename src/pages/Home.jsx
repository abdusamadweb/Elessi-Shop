import React, {useState} from 'react';
import Fade from "../components/Slider/Slider";
import Shipping from "../components/Shipping/Shipping";
import Categories from "../components/Categories/Categories";
import Product from "../components/Product/Product";

const Home = () => {

    return (
        <div className='home'>
            <Fade />
            <Shipping />
            <Categories />
            <Product />
        </div>
    );
};

export default Home;