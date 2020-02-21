import React, { Component } from 'react';

class Chirp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: this.props.account,
            date: this.props.date,
            content: this.props.content,
        }
    }
    render() {
        return (
            <h1>chirp</h1>
        )
    }
}

export default Chirp;