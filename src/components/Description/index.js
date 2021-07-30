import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div>
                <h5>Description</h5>
                <textarea rows="10" className="form-control border border-dark rounded-0"></textarea>
            </div>
        );
    }
}

export default Description;