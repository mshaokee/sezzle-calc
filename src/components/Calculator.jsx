import React, {Component} from 'react';
//import components
import Keypad from './Keypad';
import Answers from './Answers';

class Calculator extends Component {
    render(){
        return(
            <div>
                <p>Calculator</p>
                <Answers />
                <Keypad />
            </div>
        )
    }
};//end class

export default Calculator;