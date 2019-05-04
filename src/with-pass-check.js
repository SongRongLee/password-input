import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import criteriasTemplate from './password-rules';

function withPassCheck(WrappedComponent) {

    class withPassCheck extends React.Component {
        constructor(props) {
            super(props);
            this.state = { password: '', warningMsg: '' };
            this.handleOnChange = this.handleOnChange.bind(this);
            let minLength = props.config['length-min'] || 9;
            let maxLength = props.config['length-max'] || 50;

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
            return (
                <WrappedComponent onChange={this.handleOnChange} text={this.state.password} msg={this.state.warningMsg} {...this.props} />
            );
        }
    }

    withPassCheck.defaultProps = {
        config: {
            'disabled': [],
            'length-min': 9,
            'length-max': 50
        }
    }

    return withPassCheck;
}

export default withPassCheck;
