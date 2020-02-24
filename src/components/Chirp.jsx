import React, { Component } from 'react';

class Chirp extends Component {
    render(props) {
        return (
            <div class="chirp">
                <p>{this.props.account}</p>
                <p>{this.props.date}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Chirp;