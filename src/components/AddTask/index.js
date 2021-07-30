import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className='pt-5 pb-5'>
                <div className='input-group'>
                    <input type="text" className="form-control" placeholder="Add new task ..."/>
                </div>
            </div>
        );
    }
}

export default AddTask;