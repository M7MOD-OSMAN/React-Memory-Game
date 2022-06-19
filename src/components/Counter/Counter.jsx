import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const STEP = 2

const Counter = ({cardsCount, onClickButtons}) => {
    const inc = (e) => {
        e.preventDefault()
        const number = cardsCount + STEP
        if(number <= 160) onClickButtons(number)
    }
    const dec = (e) => {
        e.preventDefault()
        const number = cardsCount - STEP
        if(number >= 2) onClickButtons(number)
    }
    return (
        <div className="quantity">
            <button className="minus" onClick={dec}>-</button>
            <span className='quantity'>{cardsCount}</span>
            <button className="plus" onClick={inc}>+</button>
        </div>
    );
};

export default Counter;

Counter.prototype = {
    cardsCount: PropTypes.number.isRequired,
    onClickButtons: PropTypes.func.isRequired
}
