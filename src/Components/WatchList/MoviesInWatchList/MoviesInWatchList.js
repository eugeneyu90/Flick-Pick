import React, { Component } from 'react'
import MovieDetails from '../../MovieDetails/MovieDetails'


class MoviesInWatchList extends Component {
  render() {
    const { watchList } = this.props
    let watchListJSX = []
    watchList.length > 0 && (
      watchListJSX = watchList.map(movie =>
        <MovieDetails key={movie.id}
                      movie={movie} 
                      addMovie={this.props.addMovie}
                      commonHeight={this.state.commonHeight}
                      updateHeightArray={this.updateHeightArray} /> 
      )
    )
    return (
      <div>
        {watchListJSX}
      </div>
    )
  }
}

export default MoviesInWatchList