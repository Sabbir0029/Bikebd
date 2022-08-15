import React from 'react';
import icon1 from '../../img/icon 1.jpg';
import icon2 from '../../img/icon 2.jpg';
import icon3 from '../../img/icon 3.png';
import icon4 from '../../img/icon 4.png';

const Icon = () => {
    return (
        <div className='container mt-5 text-center'>
            <i><img className='logo1 m-2' src={icon1} alt=""/></i>
            <i><img className='logo2 m-2' src={icon2} alt=""/></i>
            <i><img className='logo m-2' src={icon3} alt=""/></i>
            <i><img className='logo m-2' src={icon4} alt=""/></i>
        </div>
    );
};

export default Icon;