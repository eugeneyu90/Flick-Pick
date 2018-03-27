import React, { Component } from 'react'


class FilteredMovie extends Component {
    render() {
        const filteredMovie = this.props.genreMovie
        const onMobile = window.innerWidth <= 500
        const styles = {
            movieContainer: {
                width: '100%',
                paddingLeft: '25px',
                paddingRight: '25px',
                textAlign: 'center',
            },
            movieTitle: {
                fontSize: '2rem',
                marginTop: '1rem',
                marginBottom: '1rem'
            }
        }
        return (
            <div style={styles.movieContainer} >
                {!(filteredMovie === '') ? <p style={styles.movieTitle} >{`${filteredMovie.title} (${filteredMovie.release_date.slice(0,4)})`}</p> : ''}
                {!(filteredMovie === '') ? <img src={`https://image.tmdb.org/t/p/w500/${filteredMovie.poster_path}` } width={onMobile ? '90%' : '25%'} alt={filteredMovie.title} /> : ''}
            </div>
        )
    }
}
export default FilteredMovie