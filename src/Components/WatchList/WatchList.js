import React, { Component } from 'react'
import FilterMovie from './FilterMovie/FilterMovie'
import MoviesInWatchList from './MoviesInWatchList/MoviesInWatchList'
class WatchList extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <MoviesInWatchList watchList={this.props.watchList}/>
        <FilterMovie />
      </div>
    )
  }
}

export default WatchList