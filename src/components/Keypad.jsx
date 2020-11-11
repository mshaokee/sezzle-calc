import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Keypad extends Component {

    componentDidMount() {
    };

    //note event.target.name was not working so had to be specifc
    render() {
        return (
            <div>
                {/* clear button */}
                <div>
                    <Button variant="contained" onClick={() => this.props.handleClick('CLEAR')}>CLEAR</Button>
                </div>
                {/* 7, 8, 9 + */}
                <Button variant="contained" onClick={() => this.props.handleClick('7')}>7</Button>
                <Button variant="contained" onClick={() => this.props.handleClick('8')}>8</Button>
                <Button variant="contained" onClick={() => this.props.handleClick('9')}>9</Button>
                <Button variant="contained" onClick={() => this.props.handleClick('+')}>+</Button>
                {/* 4, 5, 6, * */}
                <div>
                    <Button variant="contained" onClick={() => this.props.handleClick('4')}>4</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('5')}>5</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('6')}>6</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('7')}>*</Button>
                </div>
                {/* 1, 2, 3, / */}
                <div>
                    <Button variant="contained" onClick={() => this.props.handleClick('1')}>1</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('2')}>2</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('3')}>3</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('/')}>/</Button>
                </div>
                {/* 0, ., -, = */}
                <div>
                    <Button variant="contained" onClick={() => this.props.handleClick('0')}>0</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('.')}>.</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('-')}>-</Button>
                    <Button variant="contained" onClick={() => this.props.handleClick('=')}>=</Button>
                </div>
            </div>
        )
    }
};//end class

export default Keypad;