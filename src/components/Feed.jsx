import React, { Component } from 'react';
import Chirp from './Chirp.jsx';

const chirps = [
    {
        id: 1,
        account: '@BillyBob',
        date: 'Sun Nov 10 2011 9:05:10 GMT-0600 (Central Standard Time)',
        content: 'YEEEHAWW',
    },
    {
        id: 2,
        account: '@trump',
        date: 'Fri Jan 1 2013 02:55:51 GMT-0600 (Central Standard Time)',
        content: 'covfefe',
    },
    {
        id: 3,
        account: '@qwertyuiop',
        date: 'Tue May 16 2014 9:15:11 GMT-0600 (Central Standard Time)',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, hic!',
    },
]


class Feed extends Component {
    constructor() {
        super();
        this.updateContent = this.updateContent.bind(this);
        this.newChirp = this.newChirp.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            chirps: [...chirps],
            newAccount: '',
            newDate: Date(),
            newChirpText: '',
        }
        this.name = 'Feed';
    }
    newChirp(e) {
        this.updateDate(e);
        this.setState({
            chirps: [...this.state.chirps, {
                id: this.state.chirps.length + 1,
                account: this.state.newAccount,
                date: this.state.newDate,
                content: this.state.newChirpText,
            }],
            newContent: '',
        });
    }
    updateAccount(e) {
        this.setState({
            newAccount: e.target.value,
        });
    }
    updateDate(e) {
        this.setState({
            newDate: Date(),
        });
    }
    updateContent(e) {
        this.setState({
            newChirpText: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.chirps.map((chirp) => {
                        return <Chirp
                            key={chirp.id}
                            account={chirp.account}
                            date={chirp.date}
                            content={chirp.content}
                        />
                    })}
                </div>
                <div>
                    <div><input placeholder="Account"
                    onChange={this.updateAccount}
                    value={this.state.newAccount}
                    /></div>
                    <div><input
                    placeholder="Chirp"
                    onChange={this.updateContent}
                    value={this.state.newChirpText}
                     /></div>
                    <button onClick={this.newChirp}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Feed;