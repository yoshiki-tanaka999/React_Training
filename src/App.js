import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  // クラス継承
  constructor() {
    super();

    this.state = {
      string: 'Hello Diff.s',
      monsters:[]
    };
  }

  // マウントするときに、setState()で、this.state.monstersの中身を、jsonで取得及び、格納する
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // .then(users => console.log(users));
      .then(users => this.setState({ monsters: users}));
  }

  // Viewみたいなもんか
  render() {
    return(
      <div className="App">
        <CardList name="Yoshiki">
          {this.state.monsters.map(monster => (
                <h1 key= { monster.id } > { monster.name } </h1>
              ))}
        </CardList>
      </div>
    )
  }
}

export default App;
