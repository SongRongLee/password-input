import React from 'react'

class CustomTextarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.msg) {
            return (
                <div className='form-group'>
                    <label className='text-danger'>New Password*</label>
                    <textarea className='form-control is-invalid' onChange={this.props.onChange} placeholder="Password" />
                    <div className='text-danger'>{this.props.msg}</div>
                </div>
            );
        } else {
            return (
                <div className='form-group'>
                    <label >New Password*</label>
                    <textarea className='form-control' onChange={this.props.onChange} placeholder="Password" />
                </div>
            );
        }
    }
}

export default CustomTextarea;