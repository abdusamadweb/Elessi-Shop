import React from 'react';

const ItemHover = ({ setModal }) => {
    return (
        <div className='item-hover'>
            <div><i className="far fa-eye" onClick={() => setModal(true)}></i></div>
        </div>
    );
};

export default ItemHover;