import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

class BottomNav extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
  }

  select = (index) => {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="My Watchlist"
            icon={favoritesIcon}
            onClick={() => this.select(0)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;