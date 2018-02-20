import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import BottomNav from '../BottomNav/BottomNav'
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { GridList } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

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

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // backgroundColor: '#141B41'
      },
      gridList: {
        width: '90%',
        overflowY: 'auto',
        paddingLeft: 75,
        paddingRight: 75 
      },
      displayFixed: {
        position: 'fixed',
        top: 0
      }
    }

    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList 
            cols={1}
            cellHeight='auto'
            padding={1}
            style={styles.gridList} >
            <AppBar title="Movie Roulette" iconClassNameRight="muidocs-icon-navigation-expand-more" style={styles.displayFixed}/>
            <SearchBar handleResults={this.handleResults} clearResults={this.clearResults} />
            <SearchResults searchResults={this.state.searchResults} addMovie={this.addMovie} />
            <BottomNav />
          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
