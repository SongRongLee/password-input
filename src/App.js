import React from 'react';
import PassInput from './PassInput';
import withPassCheck from './withPassCheck';
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea';

export default function App() {
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
            <br />
        </div>
    );

    // CustomInput withPassCheck HOC
    let CustomInputWithPassCheck = withPassCheck(CustomInput);
    let testCustomInput = (
        <div className='custom-input'>
            <h3>HOC Password Custom Input</h3>
            <CustomInputWithPassCheck config={passInputConf} />
            <br />
        </div>
    );

    // CustomTextarea withPassCheck HOC
    let CustomTextareaWithPassCheck = withPassCheck(CustomTextArea);
    let testCustomTextarea = (
        <div className='custom-textarea'>
            <h3>HOC Password CustomTextarea</h3>
            <CustomTextareaWithPassCheck config={passInputConf} />
            <br />
        </div>
    );

    return (
        <div className='myapp'>
            {userInput}
            {testCustomInput}
            {testCustomTextarea}
        </div>
    )
}