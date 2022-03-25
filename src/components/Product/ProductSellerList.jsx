import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {filterData} from "../../redux/foodSlice";

const ProductSellerList = ({
    active,
    getActive,
    getFoods,
    fruits,
    milks,
    products,
    vegetables,
}) => {

    const dispatch = useDispatch()
   useEffect(()=> {
       dispatch(filterData("fruit"))
   },[])

    return (
        <ul className='seller__navs row center'>
            <li
                onClick={(e) => {
                    getActive(1)
                    getFoods(fruits)
                    dispatch(filterData("fruit"))
                }}
                className={`seller__nav ${active === 1 ? 'active' : ''}`}
            >
                Fruits
            </li>
            <li
                onClick={(e) => {
                    getActive(2)
                    getFoods(vegetables)
                    dispatch(filterData("vegetables"))
                }}
                className={`seller__nav ${active === 2 ? 'active' : ''}`}
            >
                Vegetables
            </li>
            <li
                onClick={(e) => {
                    getActive(3)
                    getFoods(milks)
                    dispatch(filterData("milk"))
                }}
                className={`seller__nav ${active === 3 ? 'active' : ''}`}
            >
                Milk & Cream
            </li>
            <li
                onClick={(e) => {
                    getActive(4)
                    getFoods(products)
                    dispatch(filterData("fruit"))
                }}
                className={`seller__nav ${active === 4 ? 'active' : ''}`}
            >
                Best Seller
            </li>
        </ul>
    );
};

export default ProductSellerList;