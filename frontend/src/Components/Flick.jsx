import React, { Component } from 'react'
import FilterMovie from './FilterMovie'

class Flick extends Component {
  render() {
    let display = this.props.view === 'Flick'
    return (
      <div style={{ display: display ? 'block' : 'none' }}>
        <div className="row">
          <FilterMovie />
        </div>
      </div>
    )
  }
}

export default Flick
