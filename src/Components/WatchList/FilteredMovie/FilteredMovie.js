import React, { Component } from 'react'


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
export default FilteredMovie