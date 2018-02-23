import React, { Component } from 'react'
import FilterMovie from './FilterMovie/FilterMovie'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
// import Img from 'react-image'


const posterURL = 'http://image.tmdb.org/t/p/w342'

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

  showDetails = (id) => {
    const watchList = this.props.watchList

  }

  render() {
    const { view, watchList } = this.props
    let display = (view === 'WatchList')

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
      },
      titleStyle: {
        color: 'white',
        fontSize: '1rem'
      },
      noPadding: {
        padding: 0
      }
    }
    let watchListJSX = []
    watchList.length > 0 && (
      watchListJSX = watchList.map(movie =>
        <GridTile
          key={movie.id}
          title=" "
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          onClick={() => { this.showDetails(movie.id) }}
          actionIcon={
            <IconButton onClick={() => { this.props.addMovie(movie, false) }} >
              <FontIcon className="material-icons" color="white">delete_forever</FontIcon>
            </IconButton>
          }
        >
          <img src={posterURL + movie.poster_path} alt={movie.title} />
        </GridTile>
      )
    )
    return (
      <div style={{display: display ? "block" : "none"}}>
        <div className="row">
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
              {watchListJSX}
            </GridList>
          </div>
        </div>
        <div className="row">
          <FilterMovie />
        </div>
      </div>
    )
  }
}

export default WatchList