import React from 'react';
import ReactDOM from 'react-dom';
import PassInput from '../pass-input';

describe('initialize', () => {
    it('renders without config props', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PassInput />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with config props', () => {
        const div = document.createElement('div');
        let passInputConf = {
            'disabled': ['nstart-end-space', 'include-lower'],
            'length-min': 3,
            'length-max': 10
        };
        ReactDOM.render(<PassInput config={passInputConf}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('password rules', () => {
    
});