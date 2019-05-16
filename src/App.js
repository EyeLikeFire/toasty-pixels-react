import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';
import './App.css';

class test extends Component {
  render(){
    return (
      <h1>Basic</h1>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Toasty Pixels react app
          </p>
          <h1>This is the text I edit to make sure I'm looking at my current changes ;) </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default test;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);