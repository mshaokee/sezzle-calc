import React, { Component } from 'react';
import './App.css';
//import components
import Header from './components/Header';
import Calculator from './components/Calculator';
import History from './components/History';

class App extends Component {

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
