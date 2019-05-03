import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PassInput from './pass-input';

let passInputConf = {
    'disabled': ['nstart-end-space', 'include-lower'],
    'length-min': 3,
    'length-max': 10
};

let userInput = (
    <div className='user-input'>
        <PassInput config={passInputConf} />
    </div>
);

ReactDOM.render(userInput, document.getElementById('root'));