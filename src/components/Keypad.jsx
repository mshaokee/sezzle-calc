import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Keypad extends Component {
    render() {
        return (
            <div>
                {/* clear button */}
                <div>
                    <Button variant="contained" className="button" name="CLEAR">CLEAR</Button>
                </div>
                {/* 7, 8, 9 + */}
                
                    <Button variant="contained" className="button" name="7">7</Button>
                    <Button variant="contained" className="button" name="8">8</Button>
                    <Button variant="contained" className="button" name="9">9</Button>
                    <Button variant="contained" className="button" name="+">+</Button>
                
                {/* 4, 5, 6, * */}
                <div>
                    <Button variant="contained" className="4" name="4">4</Button>
                    <Button variant="contained" className="5" name="5">5</Button>
                    <Button variant="contained" className="6" name="6">6</Button>
                    <Button variant="contained" className="*" name="*">*</Button>
                </div>
                {/* 1, 2, 3, / */}
                <div>
                    <Button variant="contained" className="1" name="1">1</Button>
                    <Button variant="contained" className="2" name="2">2</Button>
                    <Button variant="contained" className="3" name="3">3</Button>
                    <Button variant="contained" className="/" name="/">/</Button>
                </div>
                {/* 0, ., -, = */}
                <div>
                    <Button variant="contained" className="0" name="0">0</Button>
                    <Button variant="contained" className="." name=".">.</Button>
                    <Button variant="contained" className="-" name="-">-</Button>
                    <Button variant="contained" className="=" name="=">=</Button>
                </div>
            </div>
        )
    }
};//end class

export default Keypad;