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
      monsters:[],
      searchField:''
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
        <input 
          type='search' 
          placeholder='search monsters'
          onChange={ e => this.setState({ searchField:e.target.value })}

        />
        {/* propsでcard-listに値を渡す */}
        <CardList monsters= { this.state.monsters }/> 
      </div>
    );
  }
}

export default App;
