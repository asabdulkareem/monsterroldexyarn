import React, {Component} from 'react';
import {CardList} from './Components/Card-list/Card-list.component';
import {SearchBox} from './Components/Search-Box/Search-Box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // string : 'Hello king',
      monsters: [],
      SearchField:''
    }
  }
  handleChange = e => {
    this.setState({SearchField: e.target.value});
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}));
  }
  render() { 
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase())) 
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          PlaceHolder='Search Monster'
          handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Start Learning React<br/>Learnig tutorail from Andrei Neagoie</h1>
          <p>{this.state.string}</p> 
          <button onClick={() => this.setState({string: 'Hi King'}) }>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
