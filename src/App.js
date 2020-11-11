import React, { Component } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Calculator from './components/Calculator';
import History from './components/History';

class App extends Component {

  constructor(props) {
    super(props);
    //set state array for history and answers that will be send down through props
    this.state = {
      history: [],
      answers: '',
    }
  };//end constructor

  componentDidMount() {
    console.log('App mounted.');
    console.log('history:', this.state.history, ' and answers:', this.state.answers);
    
  };//end

  //handleClick function for buttons
  handleClick = (button) => {
    console.log('clicked:', button);
    if (button === '=') {
      //if button set to = do calc function
      this.calc();
    } else if (button === 'CLEAR') {
      //if button set to CLEAR clear function
      this.clear();
    } else {
      //if button not set to above do appendInput function, send button to function
      this.appendInput(button);
    }
  };//end handleClick

  calc = () => {
    let answer = '';
    try {
      answer = eval(this.state.answers);
    } catch (err) {
      answer = "ERROR";
    };//end try
    if (answer !== "ERROR") {
      //POST TO SERVER
    }
    this.setState({answers: answer});
  };//end calculate function

  clear = () => {
    //when called set answers state to empty
    this.setState({ answers: '' })
  };//end clear function

  appendInput = (button) => {
    //setState to previous state and operator
    this.setState((prevState) => ({
      // show equation, previous number + number = etc...
      answers: `${prevState.answers}${button}`,
    }));
  };//end appendInput function

  render() {
    return (
      <div className="App">
        <Header />
        {/* calculator components */}
        <div>
          {/* send handleClick down as props along with answers state */}
          <Calculator handleClick={this.handleClick} answers={this.state.answers} />
        </div>
        <div>
          {/* send history state down as props */}
          <History history={this.state.history} />
        </div>
      </div>
    )
  }
};//end class

export default App;
