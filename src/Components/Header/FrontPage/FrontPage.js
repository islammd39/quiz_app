import React from 'react';
import img1 from '../../../image/img.png'
import './FrontPage.css'

const FrontPage = () => {
    return (
        <div className='front'>
            <img src={img1} alt=".." />
            <h4>There different types of programming languages in use today and we have been able to cover each of the major ones in depth. Do you feel like you understood them all, when and how to apply them? In this quiz you will get to review...</h4>
        </div>
    );
};

export default FrontPage;