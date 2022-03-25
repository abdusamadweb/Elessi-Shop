import React, {useState} from 'react';
import './Header.scss';

const HeaderTop = () => {
    const [active, setActive] = useState(1);

    const getActive = (index) => {
        setActive(index);
    }

    return (
        <div className='header-top'>
            <div className="header-top__inner container row between">
                <p>Add anything here or just remove it...</p>
                <div className='header-top__lang langs'>
                    <span onClick={() => {getActive(1)}} className={`lang lang-en ${active === 1 ? 'active' : ''}`}>en</span>
                    <span onClick={() => {getActive(2)}} className={`lang ${active === 2 ? 'active' : ''}`}>uz</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;