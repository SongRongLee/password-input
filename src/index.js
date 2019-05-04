import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import PassInput from './pass-input';
import withPassCheck from './with-pass-check';
import CustomInput from './custom-input';
import CustomTextArea from './custom-textarea';

let passInputConf = {
    'disabled': ['nstart-end-space', 'include-lower'],
    'length-min': 3,
    'length-max': 10
};

// Basic password input
let userInput = (
    <div className='user-input'>
        <h3>Basic Password Input</h3>
        <PassInput config={passInputConf} />
        <br/>
    </div>
);

ReactDOM.render(userInput, document.getElementById('user-input'));

// CustomInput withPassCheck HOC
let CustomInputWithPassCheck = withPassCheck(CustomInput);
let testCustomInput = (
    <div className='custom-input'>
        <h3>HOC Password Custom Input</h3>
        <CustomInputWithPassCheck config={passInputConf} />
        <br/>
    </div>
);

ReactDOM.render(testCustomInput, document.getElementById('custom-input'));

// CustomTextarea withPassCheck HOC
let CustomTextareaWithPassCheck = withPassCheck(CustomTextArea);
let testCustomTextarea = (
    <div className='custom-textarea'>
        <h3>HOC Password CustomTextarea</h3>
        <CustomTextareaWithPassCheck config={passInputConf} />
        <br/>
    </div>
);

ReactDOM.render(testCustomTextarea, document.getElementById('custom-textarea'));