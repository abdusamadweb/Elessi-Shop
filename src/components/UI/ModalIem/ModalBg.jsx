import React from 'react';
import {setControlFoodDrop, setControlModal} from "../../../redux/foodSlice";
import {useDispatch, useSelector} from "react-redux";

const ModalBg = () => {
    const modal = useSelector(state => state.food.controlModal);

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setControlModal(false))}
             className={`modal-bg ${modal ? 'd-block' : 'd-none'}`}
        />
    );
};

export default ModalBg;