import React, { Component } from 'react'
import FilterMovie from './FilterMovie/FilterMovie'
import MovieCarousel from './MovieCarousel/MovieCarousel'

class WatchList extends Component {
  constructor() {
    super()
    this.state = {
      commonHeightArray: [],
      commonHeight: '',
    }
  }

  updateHeightArray = (height) => {
    this.setState({
      commonHeightArray: this.state.commonHeightArray.concat(height)
    })
    this.calculateCommonHeight()
  }

  calculateCommonHeight = () => {
    const heightArray = this.state.commonHeightArray
    let count = {}
    let firstEle = heightArray[0]
    heightArray.forEach(height => {
      if(count[height] === undefined)
        count[height] = 1
      else
        count[height] += 1
    })
    let countArray = []
    for(let height in count) {
      if(count.hasOwnProperty(height)) {
        countArray.push({
          'height': height,
          'count': count[height]
        })
      }
    }
    // sort from highest frequency to least
    countArray.sort((a, b) => {
      return a.count < b.count
    })
    if(countArray.length > 0) {
      this.setState({
        commonHeight: Number(countArray[0].height)
      })
    }
  }

  render() {
    return (
      <div>
        <MovieCarousel 
          watchList={this.props.watchList} 
          commonHeight={this.state.commonHeight}
          updateHeightArray={this.updateHeightArray} />
        <FilterMovie />
      </div>
    )
  }
}

export default WatchList