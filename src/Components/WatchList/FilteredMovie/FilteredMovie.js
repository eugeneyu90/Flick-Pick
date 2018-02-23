import React, { Component } from 'react'


class FilteredMovie extends Component {
    render() {
        const filteredMovie = this.props.genreMovie
        const styles = {
            movieContainer: {
                width: '100%',
                paddingLeft: '25px',
                paddingRight: '25px',
            }
        }
        return (
            <div style={styles.movieContainer} >
                {!(filteredMovie === '') ? <h3>Your movie is: {filteredMovie.title}</h3> : ''}
                {!(filteredMovie === '') ? <img src={`https://image.tmdb.org/t/p/w500/${filteredMovie.poster_path}` } width='100%' alt={filteredMovie.title} /> : ''}
            </div>
        )
    }
}
export default FilteredMovie