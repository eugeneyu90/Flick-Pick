import React, {Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'


const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const searchIcon = <FontIcon className="material-icons">search</FontIcon>
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;

class BottomNav extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  select = (index, view) => {
    this.setState({
      selectedIndex: index
    })
    this.props.updateView(view)
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={{textAlign: 'center'}}>
          <BottomNavigationItem
            label="Search"
            icon={searchIcon}
            onClick={() => this.select(0, 'Search')}
          />
          <BottomNavigationItem
            label="Watchlist"
            icon={favoritesIcon}
            onClick={() => this.select(1, 'WatchList')}
          />  
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;