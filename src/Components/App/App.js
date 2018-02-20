import React, { Component } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import BottomNav from '../BottomNav/BottomNav'
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { GridList } from 'material-ui/GridList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      watchList: []
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
    const { watchList } = this.state
    if(add === true) { 
      this.setState({
        watchList: watchList.concat(movie) 
      })
    } else {
      watchList.splice(watchList.indexOf(movie), 1)
      this.setState({
        watchList: watchList
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
        // width: '90%',
        overflowY: 'auto',
        paddingLeft: 75,
        paddingRight: 75 
      },
      fixedNav: {
        position: 'fixed',
        paddingLeft: 75,
        paddingRight: 75,
        zIndex: 1,
        width: '100%'
      },
      offset: {
        paddingTop: 120
      },
      resultsPadding: {
        paddingLeft: 75,
        paddingRight: 75,
      }
    }

    return (
      <MuiThemeProvider>
        <div className="container-fluid">
          <div className="row" style={styles.fixedNav} >
            <AppBar title="Movie Roulette" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <SearchBar handleResults={this.handleResults} clearResults={this.clearResults} />
          </div>
          <main className="row" style={{...styles.offset, ...styles.resultsPadding}}>
          {/* // <GridList 
          //   cols={1}
          //   cellHeight='auto'
          //   padding={1}
          //   style={styles.gridList} > */}
            <SearchResults searchResults={this.state.searchResults} addMovie={this.addMovie} watchList={this.state.watchList} />
          </main>
            <BottomNav style={styles.displayFixed} />
          {/* </GridList> */}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
