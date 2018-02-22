import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'

const genres = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    ScienceFiction: 878,
    TvMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37
}

class FilteredMovie extends Component {
  render() {
      const filteredMovie = this.props.genreMovie
      return (
          <div>
              {!(filteredMovie === '') ? <h1>Your movie is: {filteredMovie.title}</h1> : ''}
              {!(filteredMovie === '') ? <img src={`https://image.tmdb.org/t/p/w780/${filteredMovie.poster_path}`}/> : ''}
          </div>
      )
  }
}


class FilterMovie extends Component {
    constructor() {
        super()
        this.state = {
            genreId: '',
            genreMovie: ''
        }
    }

    update = (e, index, value) => {
        this.setState({ genreId: value })
    }
    getRandom = () => {
        let max = 20
        let min = 1
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2d1610b0077610c43b2fe59ad827cfec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}&with_genres=${this.state.genreId}`)
            .then((res) => {
                let movieArray = res.data.results
                this.setState({
                    genreMovie: this.randomMovie(movieArray)
                })
            })
    }
    randomMovie = (movieList) => {
        let random = Math.floor(Math.random() * movieList.length)
        return movieList[random]
    }

    render() {
        console.log(this.state.genreId)
        return (
            <div>
                <SelectField value={this.state.genreId} onChange={this.update} floatingLabelText="Genre">
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={genres.Action} primaryText="Action"/>
                    <MenuItem value={genres.Adventure} primaryText="Adventure"/>
                    <MenuItem value={genres.Animation} primaryText="Animation"/>
                    <MenuItem value={genres.Crime} primaryText="Crime"/>
                    <MenuItem value={genres.Documentary} primaryText="Documentary"/>
                    <MenuItem value={genres.Drama} primaryText="Drama"/>
                    <MenuItem value={genres.Family} primaryText="Family"/>
                    <MenuItem value={genres.Fantasy} primaryText="Fantasy" />
                    <MenuItem value={genres.History} primaryText="History"/>
                    <MenuItem value={genres.Horror} primaryText="Horror"/>
                    <MenuItem value={genres.Music} primaryText="Music" />
                    <MenuItem value={genres.Mystery} primaryText="Mystery" />
                    <MenuItem value={genres.Romance} primaryText="Romance" />
                    <MenuItem value={genres.ScienceFiction} primaryText="Science Fiction" />
                    <MenuItem value={genres.Thriller} primaryText="Thriller"/>
                    <MenuItem value={genres.TvMovie} primaryText="TV Movie" />
                    <MenuItem value={genres.War} primaryText="War"/>
                    <MenuItem value={genres.Western} primaryText="Western" />
                </SelectField>
                <RaisedButton onClick={this.getRandom} label="Randomize" primary={true} />
                <FilteredMovie genreMovie={this.state.genreMovie} />
            </div>
        )
    }
}

export default FilterMovie