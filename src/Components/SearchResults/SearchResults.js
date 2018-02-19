import React, { Component } from 'react'
// import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import MovieDetails from '../MovieDetails/MovieDetails'

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

    //TMDB Search Results
    // console.log(searchResults.results)
    const displayNum = (searchResults.total_results > 0 && searchResults.total_results < 5) ? searchResults.total_results : 5

    // console.log(`displayNum is ${displayNum}`)
    // console.log(searchResults.total_results)
    searchResults.total_results > 0 ? 
      resultsList = searchResults.results.slice(0, displayNum).map((movie) =>
        <MovieDetails key={movie.id}
                      movie={movie} 
                      addMovie={this.props.addMovie}/>) 
      : console.log('No data is returned')

    return (
      <div>
        {resultsList}
      </div>
    )
  }
}

export default SearchResults