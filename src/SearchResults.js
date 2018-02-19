import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import MovieDetails from './MovieDetails'

//API Keys
const omdbAPI = '1de557f0'
const tmdbAPI = '7a9602f5224d26b4db42b9c580059391'
//API BaseURLs
const omdbURL = 'http://www.omdbapi.com/'
const tmdbURL = 'https://api.themoviedb.org/3/'
// const tmdbURL = 'https://api.themoviedb.org/3/search/movie'
// const tmdbURL = 'https://api.themoviedb.org/3/find/'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imdbID: ''
    }
  }

  handleMovieSelect = (event) => {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/find/${this.state.imdbID}`,
      params: {
        include_adult: 'false',
        page: '1',
        language: 'en-US',
        api_key: tmdbAPI,
        external_source: 'imdb_id'
      }
    }).then(res => {
      console.log('testing')
    })
  }

  render() {
    let { searchResults } = this.props
    let resultsList = []
    const styles = {
      list: {
        lineHeight: 0.25
      }
    }
    // OMDB Search Results
    // console.log(searchResults)
    // searchResults.Response === "True" ? resultsList = searchResults.Search.map((movie) => 
    //     <ListGroupItem key={movie.imdbID} id={movie.imdbID} style={styles.list} tag="button">
    //       {`${movie.Title} (${movie.Year})`}
    //     </ListGroupItem>
    //   ) : console.log('No data is returned')

    //TMDB Search Results
    console.log(searchResults.results)
    const spliceNum = (searchResults.total_results > 0 && searchResults.total_results < 5) ? searchResults.total_results : 5

    console.log(`spliceNum is ${spliceNum}`)
    searchResults.total_results > 0 ? 
      resultsList = searchResults.results.splice(0, spliceNum).map((movie) =>
        <MovieDetails key={movie.id} movie={movie} />) : console.log('No data is returned')
        // <ListGroupItem key={movie.id} id={movie.id} style={styles.list} tag="button">
        //     {`${movie.title} (${movie.release_date.slice(0, 4)})`}
        // </ListGroupItem>) : console.log('No data is returned')
    return (
      <div>
        {resultsList}
      </div>
    )
  }
}

export default SearchResults