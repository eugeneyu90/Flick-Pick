import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

import axios from 'axios';

//API Keys
const omdbAPI = '1de557f0'
const tmdbAPI = '7a9602f5224d26b4db42b9c580059391'
//API BaseURLs
const omdbURL = 'http://www.omdbapi.com/'
const tmdbURL = 'https://api.themoviedb.org/3/'
const posterURL = 'http://image.tmdb.org/t/p/original'

// Get IMDB ID from API
  // const imdbID = axios({
  //   method: 'GET',
  //   baseURL: tmdbURL,
  //   url: `movie/${movie.id}/external_ids`,
  //   api_key: tmdbAPI,
  // }).then(res => {
  //   return res.data.imdb_id
  // })
  // console.log(imdbID)


class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //collapse: false,
      selected: false,
      modal: false,
      open: false
    }
  }
    
  toggle = () => {
    this.setState({ 
      // collapse: !this.state.collapse
      modal: !this.state.modal
    });
  }

  toggleSelect = () => {
    this.setState(prevState => ({ // parentheses () are required or else does not update state
      selected: !prevState.selected
    }))
    this.props.addMovie(this.props.movie, !this.state.selected)
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { id, title, release_date, overview, poster_path, backdrop_path } = this.props.movie
    const added = '#5BC16C'
    const notAdded = '#D4DDDF'
    const styles = {
      resultButton: {
        textAlign: 'left',
      },
      checked: {
        color: '#5BC16C', //green
      },
      unchecked: {
        color: '#D4DDDF'  //grey
      },
      movieBackground: {
        backgroundImage: `url(${posterURL}${backdrop_path})`,
        backgroundSize: 'cover',
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        width: '100vw'
      },
      modalTheme: {
        opacity: 0.9,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 4,
        borderWidth: 0.5, 
        borderColor: this.state.selected ? added : notAdded 
      }
    }
    const actions = [
      <IconButton tooltip="Click to select..." onClick={this.toggleSelect} >
        <FontIcon className="material-icons" color={this.state.selected ? added : notAdded }>add</FontIcon>
      </IconButton>,
    ]
    console.log(this.props.movie)
    return (
      <MuiThemeProvider>
        <Card>
          <CardMedia 
            // overlay={<CardTitle 
            //           title={title} 
            //           subtitle={release_date} />}
            // onClick={this.handleOpen} 
          >
            <img src={posterURL+poster_path} alt={title} label="Dialog" onClick={this.handleOpen} />
          </CardMedia>
          <Dialog
            title={title}
            style={{...styles.movieBackground}}
            titleStyle={styles.modalTheme}
            bodyStyle={styles.modalTheme}
            actionsContainerStyle={styles.modalTheme}
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          > 
            <img>
            
            </img>
            <p> Release Date: {release_date} </p>
            <p> Plot: {overview} </p>

          </Dialog>
          {/* <CardTitle title={title} subtitle={release_date} /> */}
          {/* <CardText>{overview}</CardText> */}
          {/* <CardActions>
            <IconButton tooltip="Font Icon" onClick={this.toggleSelect}>
              <FontIcon className="material-icons" style={this.state.selected ? styles.checked : styles.unchecked}>done</FontIcon>
            </IconButton>
          </CardActions> */}
        </Card>
      </MuiThemeProvider>
    )

    // return (
    //   <div>
    //     <img color="secondary" src={posterURL+poster_path} width="200" onClick={this.toggle}/>
    //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={title}>
    //       <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
    //       <ModalBody>
    //         {overview}
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button type="button"
    //                 color="secondary"
    //                 onClick={this.toggleSelect}>
    //           <span className="glyphicon glyphicon-ok"
    //                 style={this.state.selected ? styles.checked : styles.unchecked}
    //                 aria-hidden="true">
    //           </span>
    //         </Button>
    //         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    //       </ModalFooter>
    //     </Modal>
    //   </div>
    // )
  }
}


export default MovieDetails
