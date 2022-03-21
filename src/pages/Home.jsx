import React, {useState} from 'react';
import Fade from "../components/Slider/Slider";
import Shipping from "../components/Shipping/Shipping";
import Categories from "../components/Categories/Categories";
import Product from "../components/Product/Product";

const Home = ({ like, setLikes, modal, setModal }) => {

    return (
        <div className='home'>
            <Fade />
            <Shipping />
            <Categories />
            <Product like={like} setLikes={setLikes} modal={modal} setModal={setModal} />
        </div>
    );
};

export default Home;