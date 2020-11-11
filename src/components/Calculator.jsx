import React, {Component} from 'react';
//import components
import Keypad from './Keypad';
import Answers from './Answers';

class Calculator extends Component {

    render(){
        return(
            <div>
                <p>Calculator</p>
                {/* send props down further to components */}
                <Answers answers={this.props.answers}/>
                <Keypad handleClick={this.props.handleClick}/>
            </div>
        )
    }
};//end class

export default Calculator;