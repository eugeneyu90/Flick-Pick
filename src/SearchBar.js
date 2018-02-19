import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//API Keys
const omdbAPI = '1de557f0'
const tmdbAPI = '7a9602f5224d26b4db42b9c580059391'
//API BaseURLs
const omdbURL = 'http://www.omdbapi.com/'
const tmdbURL = 'https://api.themoviedb.org/3/search/movie'



class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  // Movie Search using OMDB API
  // handleInput = (event) => {
  //   this.setState({
  //     userInput: event.target.value
  //   })
  //   axios({
  //     method: 'GET',
  //     url: omdbURL,
  //     params: {
  //       apikey: omdbAPI,
  //       s: event.target.value,
  //       type: 'movie'
  //     }
  //   }).then(res => {
  //     const searchResults = res.data
  //     this.props.handleResults(searchResults)
  //   })
  // }

  // Movie Search using TMDB API
  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
    event.target.value !== '' ? axios({
      method: 'GET',
      url: tmdbURL,
      params: {
        api_key: tmdbAPI,
        query: event.target.value,
        include_adult: 'false',
        page: '1',
        language: 'en-US',
      }
    }).then(res => {
      // console.log(res) // HTTP Request
      const searchResults = res.data
      this.props.handleResults(searchResults)
    }) : console.log('Empty search, no request is sent...')
  }

  // componentDidMount() {
  //   axios({
  //     method: 'POST',
  //     url: `http://www.omdbapi.com/`,
  //     params: {
  //       apikey: '1de557f0',
  //       s: event.target.value,
  //       type: 'movie'
  //     }
  //   }).then(res => {
  //     const searchResults = res.data
  //     console.log(res.data.Search)
  //     this.props.handleResults(searchResults)
  //   })
  // }

  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="text" name="searchBar" value={this.state.userInput} onChange={this.handleInput} placeholder="Search a movie" />
        </FormGroup>
      </Form>
    )
  }
}

export default SearchBar