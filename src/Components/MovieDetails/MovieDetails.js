import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

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
  
    // const notAdded = '#6c6a6a' //dark gray
    const paperShadowDefault = 'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px'
    const paperShadowSelected = 'rgba(76, 199, 97, 0.25) 0px 14px 45px, rgba(76, 199, 97, 0.5) 0px 10px 18px'
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
        // height: this.state.height,
        backgroundColor: 'lightgrey',
        opacity: 0.5,

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
        zIndex: this.state.hover ? 3 : 1,
        position: 'relative',
        transform: 'scale(1.2)',
        transition: 'all 200ms linear',
        boxShadow: '0px 0px 10px #000000'
      },
      imgWrapper: {
        position: 'relative'
      },
      checkmarked: {
        position: 'absolute',
        zIndex: this.state.hover ? 3 : 2,
        top: '10px',
        right: '10px',
        // fontSize: '24px',
        // width: '25px',
        // height: '25px',
        backgroundColor: this.state.selected ? 'rgba(76, 199, 97, 0.8)' : 'rgba(255, 255, 255, 0.3)'

      }
    }
    const actions = [
      <IconButton onClick={this.toggleSelect} >
        <FontIcon className="material-icons.md-48" color={this.state.selected ? added : notAdded }>add</FontIcon>
      </IconButton>
    ]
    // console.log(this.props.movie)
    return (
      <MuiThemeProvider >
        {/* <div className="col s4 m3 l2" style={styles.noPadding} > */}
        <div className="col s4 m3 l2" style={styles.noPadding} >
          <Card >
            <CardMedia 
              style={{...styles.imgHeight, ...styles.imgWrapper}} //fix posters which height discrepancies
              // onClick={this.handleOpen}
              // overlayStyle={styles.overStyle}
              // overlayContentStyle={styles.overStyle}
              // overlayContainerStyle={styles.overStyle}
              // overlay={
              //   <IconButton onClick={this.toggleSelect} >
              //     <FontIcon className="material-icons" color={this.state.selected ? added : notAdded }>add</FontIcon>
              //   </IconButton>
              // }
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
              <div onClick={this.toggleSelect}>
                <Paper style={styles.checkmarked} zDepth={3} circle={true} >
                  <IconButton>
                    <FontIcon className="material-icons"  color={this.state.selected ? 'white' : notAdded }>add</FontIcon>
                  </IconButton>
                </Paper>
              </div>

              {/* <span style={styles.checkmarked}>
                  <FontIcon className="material-icons" color={this.state.selected ? added : notAdded }>add</FontIcon>
              </span> */}
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
