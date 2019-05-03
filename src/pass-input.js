import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './pass-input.css';

const criteriasTemplate = {
    'nstart-end-space': {
        'warningMsg': 'Password cannot start or end with a space.',
        'regex': new RegExp('^[^\\s]*[^\\s]$')
    },
    'include-lower': {
        'warningMsg': 'Please include a lower case letter.',
        'regex': new RegExp('[a-z]')
    },
    'include-upper': {
        'warningMsg': 'Please include a upper case letter.',
        'regex': new RegExp('[A-Z]')
    },
    'include-number': {
        'warningMsg': 'Please include a number.',
        'regex': new RegExp('[0-9]')
    },
    'length-limit': {
        'warningMsg': 'Password length must inside 9-50.',
        'regex': new RegExp('^.{9,50}$')
    },
};

class PassInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '', warningMsg: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
        let minLength = Number.isInteger(props.config['length-min']) ? props.config['length-min'] : 9;
        let maxLength = Number.isInteger(props.config['length-max']) ? props.config['length-max'] : 50;

        // Set criterias based on config
        this.criterias = criteriasTemplate;
        if (props.config['disabled']) {
            props.config['disabled'].forEach(x => { delete this.criterias[x] });
        }

        this.criterias["length-limit"] = {
            'warningMsg': 'Password length must inside ' + minLength + '-' + maxLength + '.',
            'regex': new RegExp('^.{' + minLength + ',' + maxLength + '}$')
        };
    }

    handleOnChange(event) {
        // Check if valid
        let inputString = event.target.value;
        this.setState({ password: inputString });
        if (inputString !== '') {
            for (let key in this.criterias) {
                if (!this.criterias[key].regex.test(inputString)) {
                    this.setState({ warningMsg: this.criterias[key].warningMsg });
                    return;
                }
            }
        }
        this.setState({ warningMsg: '' });
    }

    render() {
        if (this.state.warningMsg !== '') {
            return (
                <div className='form-group'>
                    <label className='text-danger'>New Password*</label>
                    <input type='password' className='form-control is-invalid' onChange={this.handleOnChange} placeholder="Password" />
                    <div className='text-danger'>{this.state.warningMsg}</div>
                </div>
            );
        } else {
            return (
                <div className='form-group'>
                    <label >New Password*</label>
                    <input type='password' className='form-control' onChange={this.handleOnChange} placeholder="Password" />
                </div>
            );
        }
    }
}

PassInput.defaultProps = {
    config: {
        'disabled': [],
        'length-min': 9,
        'length-max': 50
    }
}

export default PassInput;
