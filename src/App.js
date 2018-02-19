import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      selection: []
    }
  }

  // componentDidMount = (searchResults) => {
  //   this.handleResults(searchResults)
  // }

  handleResults = (searchResults) => {
    this.setState({
      searchResults: searchResults
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar handleResults={this.handleResults} />
        <SearchResults searchResults={this.state.searchResults} />
        <p className="App-intro">
        </p>
      </div>
    )
  }
}

export default App
