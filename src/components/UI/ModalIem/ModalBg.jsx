import React from 'react';

const ModalBg = ({ modal, setModal }) => {
    return (
        <div onClick={() => setModal(false)} className={`modal-bg ${modal ? 'd-block' : 'd-none'}`}></div>
    );
};

export default ModalBg;