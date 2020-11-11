import React, { Component } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Calculator from './components/Calculator';
import History from './components/History';

class App extends Component {

  constructor(props){
    super(props);
    //set state array for history and answers that will be send down through props
    this.state = {
      history: [],
      answers: '',
    }
  };//end constructor

  componentDidMount(){
    console.log('App mounted.');
  };//end
  
  //handleClick function for buttons
  handleClick = (button) => {
    if (button === '='){
      //if button equal to = do calc function
      this.calc();
    } else if (button === 'CLEAR') {
      //if button equal to CLEAR clear function
      this.clear();
    } else {
      this.appendInput(button);
    }
  };//end handleClick

  calculate = () => {
    let answer = '';
    try {
      answer = eval(this.state.answers);
    } catch (err) {
      answer = "ERROR";
    };//end try
    if (answer !== "ERROR"){
      //POST TO SERVER
    }
  };//end calculate function

  clear = () => {
    //when called set answers state to empty
    this.setState({answers: ''})
  };//end clear function

  appendInput = (button) => {
    //setState to previous state and operator
    this.setState((prevState) => ({
      answers: `${prevState.results}${button}`,
    }));
  };//end appendInput function

  render() {
    return (
      <div className="App">
        <Header />
        {/* calculator components */}
        <div>
          <Calculator />
        </div>
        <div>
          <History />
        </div>
      </div>
    )
  }
};//end class

export default App;
