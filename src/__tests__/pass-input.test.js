import React from 'react';
import { shallow, mount } from 'enzyme';
import PassInput from '../pass-input';

describe('initialize', () => {
    it('renders without config props', () => {
        shallow(<PassInput />);
    });

    it('renders with config props all', () => {
        let passInputConf = {
            'disabled': ['nstart-end-space', 'include-lower'],
            'length-min': 4,
            'length-max': 10
        };
        shallow(<PassInput config={passInputConf} />);
    });

    it('renders with config props no length-min', () => {
        let passInputConf = {
            'disabled': ['nstart-end-space', 'include-lower'],
            'length-max': 10
        };
        shallow(<PassInput config={passInputConf} />);
    });

    it('renders with config props no length-nax', () => {
        let passInputConf = {
            'disabled': ['nstart-end-space', 'include-lower'],
            'length-min': 4,
        };
        shallow(<PassInput config={passInputConf} />);
    });

    it('renders with config props no disabled', () => {
        let passInputConf = {
            'length-min': 4,
            'length-max': 10
        };
        shallow(<PassInput config={passInputConf} />);
    });
});

describe('password rules', () => {
    let passInput;
    let inputField;
    let passInputConf = {
        'disabled': [],
        'length-min': 4,
        'length-max': 10
    };

    beforeEach(() => {
        passInput = shallow(<PassInput config={passInputConf}/>);
        inputField = passInput.find('input');
    });

    it('empty valid', () => {
        inputField.simulate('change', { target: { value: '' } });
        expect(passInput.find('div.text-danger').length).toEqual(0);
    });

    it('valid', () => {
        inputField.simulate('change', { target: { value: 'aabC1234' } });
        expect(passInput.find('div.text-danger').length).toEqual(0);
    });

    it('nstart-end-space invalid', () => {
        inputField.simulate('change', { target: { value: ' aabC1234' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Password cannot start or end with a space.');
    });

    it('include-lower invalid', () => {
        inputField.simulate('change', { target: { value: 'AABCC1234' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Please include a lower case letter.');
    });

    it('include-upper invalid', () => {
        inputField.simulate('change', { target: { value: 'aabc1234' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Please include a upper case letter.');
    });

    it('include-number invalid', () => {
        inputField.simulate('change', { target: { value: 'aabCerf' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Please include a number.');
    });

    it('length-limit invalid too short', () => {
        inputField.simulate('change', { target: { value: 'Ab1' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Password length must inside 4-10.');
    });

    it('length-limit invalid too long', () => {
        inputField.simulate('change', { target: { value: 'Ac12345678910' } });
        expect(passInput.find('div.text-danger').text()).toEqual('Password length must inside 4-10.');
    });
});