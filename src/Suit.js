import React from 'react';
import Card from './Card';

class Suit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            suit: props.name,
            two: { name: "Two", value: 2, suit: props.name },
            three: { name: "Three", value: 3, suit: props.name },
            four: { name: "Four", value: 4, suit: props.name },
            five: { name: "Five", value: 5, suit: props.name },
            six: { name: "Six", value: 6, suit: props.name },
            seven: { name: "Seven", value: 7, suit: props.name },
            eight: { name: "Eight", value: 8, suit: props.name },
            nine: { name: "Nine", value: 9, suit: props.name },
            ten: { name: "Ten", value: 10, suit: props.name },
            jack: { name: "Jack", value: 11, suit: props.name },
            queen: { name: "Queen", value: 12, suit: props.name },
            king: { name: "King", value: 13, suit: props.name },
            ace: { name: "Ace", value: 14, suit: props.name },
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.suit}</h1>
                <ul>
                    <li><Card props={this.state.ace} /> </li>
                    <li><Card props={this.state.two} /> </li>
                    <li><Card props={this.state.three} /> </li>
                    <li><Card props={this.state.four} /> </li>
                    <li><Card props={this.state.five} /> </li>
                    <li><Card props={this.state.six} /> </li>
                    <li><Card props={this.state.seven} /></li>
                    <li><Card props={this.state.eight} /></li>
                    <li><Card props={this.state.nine} /></li>
                    <li><Card props={this.state.ten} /></li>
                    <li><Card props={this.state.jack} /></li>
                    <li><Card props={this.state.queen} /></li>
                    <li><Card props={this.state.king} /></li>
                </ul>
            </div>
        )
    }
}

export default Suit;