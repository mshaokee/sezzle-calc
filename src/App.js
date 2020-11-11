import React, { Component } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Calculator from './components/Calculator';
import History from './components/History';
//import WebSocket
import socketIOClient from 'socket.io-client';
const socket = socketIOClient();

class App extends Component {

  constructor(props) {
    super(props);
    //set state array for history and answers that will be send down through props
    this.state = {
      history: [],
      answers: '',
    };//end state
    socket.on(
      'rerender', (msg) => {
        this.getHistory();
      }
    );//end socket
  };//end constructor

  componentDidMount() {
    console.log('App mounted.');
    console.log('history:', this.state.history, ' and answers:', this.state.answers); 
    //get all history from db
    this.getHistory();
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

  send = () => {
    //emit sends data to all live clients
    socket.emit('new answer');
  };//end send function

  calc = () => {
    let answer = '';
    try {
      answer = eval(this.state.answers);
    } catch (err) {
      answer = "ERROR";
    };//end try
    if (answer !== "ERROR") {
      //POST TO SERVER
      this.postHistory(answer);
      this.send();
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

  getHistory = () => {
    //fetch data at /history, respond json and set to objects to state
    fetch('/history').then((res) => res.json()).then((history) => this.setState({history}));
  };//end getHistory

  postHistory = (answers) => {
    const reverseTime = 1000000000000 - new Date().getTime();
    //post to history, send body of time and answers value
    fetch("/history", {
      method: "POST",
      body: JSON.stringify({
        time: reverseTime,
        value: `${this.state.answers}=${answers}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json)
      //refresh when all done
      .then(this.getAllRecords());
  };//end postHistory

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
