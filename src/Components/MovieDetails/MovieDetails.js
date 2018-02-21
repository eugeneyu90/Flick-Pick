import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor'
import CircularProgress from 'material-ui/CircularProgress';



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
      selected: this.props.watchList.find(movie => { return movie.id === Number(this.props.movie.id) }) !== undefined ? true : false,
      modal: false,
      open: false,
      hover: false,
      width: '',
      height: ''
    }
  }
    
  toggle = () => {
    this.setState({ 
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

  checkDimensions = ({ target: img }) => {
    this.props.updateHeightArray(img.offsetHeight)
    this.setState({
      width: img.width,
      height: img.height
    })
  }

  toggleHover = () => {
    this.setState(prevState => ({
      hover: !prevState.hover
    }))
  }
  
  render() {
    const { title, release_date, overview, poster_path, backdrop_path } = this.props.movie
    // console.log(this.props.watchList.find(movie => { return movie.id === Number(this.props.movie.id) }) !== undefined ? true : false)
    // const preloadedImage = 
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
      },
      selectedMovie: {
        borderRadius: 4,
        borderWidth: 0.5, 
        borderColor: this.state.selected ? added : notAdded 
      },
      noPadding: {
        padding: 0
      },
      imgHeight: {
        height: this.props.commonHeight,
        backgroundColor: 'black',
        align: 'middle'
      },
      hover: {
        zIndex: 9,
        position: 'relative',
        transform: 'scale(1.2)',
        transition: 'all 200ms linear',
        boxShadow: '0px 0px 10px #000000'
      },
      img: {
        // transform: 'scale(1)',
        // transition: 'all 200ms linear'
      }
      
    }
    const actions = [
      <IconButton onClick={this.toggleSelect} >
        <FontIcon className="material-icons" color={this.state.selected ? added : notAdded }>add</FontIcon>
      </IconButton>,
    ]
    // console.log(this.props.movie)
    return (
      <MuiThemeProvider >
        <div className="col s4 m3 l2" style={styles.noPadding} >
        <Card containerStyle={styles.selectedMovie} >
          <CardMedia style={styles.imgHeight}
            // overlay={<CardTitle 
            //           title={title} 
            //           subtitle={release_date} />}
            // onClick={this.handleOpen} 
          >
            <img 
              onLoad={this.checkDimensions} 
              src={posterURL+poster_path} 
              alt={title} 
              label="Dialog" 
              onClick={this.handleOpen}
              style={this.state.hover ? styles.hover : ''}
              onMouseEnter={this.toggleHover} 
              onMouseLeave={this.toggleHover}
            />
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
        </Card>
        </div>
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
