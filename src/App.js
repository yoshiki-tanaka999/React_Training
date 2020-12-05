import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // クラス継承
  constructor() {
    super();

    this.state = {
      string: 'Hello Diff.s',
      mosters:[
        {
          name: 'Flankentein',
          id: 'a1'
        },
        {
          name: 'Dracula',
          id: 'a2'
        },        
        {
          name: 'zombie',
          id: 'a3'
        }
      ]
    };
  }


  // Viewみたいなもんか
  render() {
    return(
      <div className="App">
        {
          this.state.mosters.map(monster => 
          <h1 key= { monster.id } > { monster.name } </h1>)
        }
    </div>
    )
  }
}

export default App;
