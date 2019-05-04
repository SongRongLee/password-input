import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/pass-input.css';
import criteriasTemplate from './password-rules';


class PassInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '', warningMsg: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
        let minLength = props.config['length-min'] || 9;
        let maxLength = props.config['length-max'] || 50;

        // Set criterias based on config
        this.criterias = Object.assign({}, criteriasTemplate);
        if (props.config['disabled'] && props.config['disabled'].length != 0) {
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
        if (this.state.warningMsg) {
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
