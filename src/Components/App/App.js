import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'


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

  clearResults = () => {
    this.setState({
      searchResults: []
    })
  }

  addMovie = (movie, add) => {
    const { selection } = this.state
    if(add === true) { 
      this.setState({
        selection: selection.concat(movie) 
      })
    } else {
      selection.splice(selection.indexOf(movie), 1)
      this.setState({
        selection: selection
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchBar handleResults={this.handleResults} clearResults={this.clearResults}/>
        <SearchResults searchResults={this.state.searchResults} addMovie={this.addMovie}/>
        <p className="App-intro">
        </p>
      </div>
    )
  }
}

export default App
