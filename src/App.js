import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder= 'search monsters'
          handleChange= {e =>this.setState({ searchField: e.target.value }) }
        />
        {/* propsでcard-listに値を渡す */}
        <CardList monsters= { filteredMonsters }/> 

        {/* フィルターなしバージョン */}
        {/* <CardList monsters= { this.state.monsters }/>  */}  
      </div>
    );
  }
}

export default App;
