import React, { Component } from 'react'


const posterURL = 'http://image.tmdb.org/t/p/original'

class MovieCarousel extends Component {
  render() {
    const { watchList, commonHeight, updateHeightArray } = this.props
    let watchListJSX = []
    watchList.length > 0 && (
      watchListJSX = watchList.map(movie =>
        <a 
          key={movie.id}
          className="carousel-item"
          href="#one!"
        >
          <img 
            src={posterURL+movie.poster_path} 
            onLoad={({target: img}) => {
              updateHeightArray(img.offsetHeight)
            }}  
          />
        </a>
      )
    )
    return (
      <div className="carousel">
        {watchListJSX}
      </div>
    )
  }
}

export default MovieCarousel