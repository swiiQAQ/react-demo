import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './header.css';
import Timer from './timer';
import search from './search.svg';
import HeaderB from './HeaderB.js';

let catelog=['Docs','Tutorial','Community','Blog'];
function HeaderIcon(props) {
  return (
    <div class='headerIcon'>
      <img src={props.src} />
      <span>{props.text}</span>
    </div>
  )
}

function CatelogItems(props){
    let list = props.content.map(function(item){
      return (
        <li>{item}</li>
      ) 
    })
    return (
      <ul class="catelog">{list}</ul>
    )
}

function SearchBar(props){
  return (
    <div class="searchBar">
      <img src={props.src} />
      <input type="text"  placeholder={props.defaultContent}/>
    </div>
  )
}
function Header(props) {
  return (
    <div class='header'>
      <div class="header_box">
        <HeaderIcon src={props.src} text={props.text} />
        <CatelogItems content={catelog} />
        <SearchBar src={search} defaultContent="Search docs"/>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        */}
        {/* <Timer />  */}
        <Header src={logo} text="React" />
        <HeaderB src={logo} text="React" />
      </div>
    );
  }
}

export default App;
