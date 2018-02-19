import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      modal: false
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

  render() {
    const { id, title, release_date, overview, poster_path } = this.props.movie
    const styles = {
      resultButton: {
        textAlign: 'left',
      },
      checked: {
        color: '#5BC16C',
      },
      unchecked: {
        color: '#D4DDDF'
      },
      moviePoster: {
        backgroundImage: `url(${posterURL+poster_path})`,
        width: 50,
        height: 'auto',

      }
    }

    return (
      <div>
        <img color="secondary" src={posterURL+poster_path} width="200" onClick={this.toggle}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={title}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            {overview}
          </ModalBody>
          <ModalFooter>
            <Button type="button"
                    color="secondary"
                    onClick={this.toggleSelect}>
              <span className="glyphicon glyphicon-ok"
                    style={this.state.selected ? styles.checked : styles.unchecked}
                    aria-hidden="true">
              </span>
            </Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )



    // Accordion Like Display
    // return (
    //   <div>
    //     <Button color="secondary" style={styles.resultButton} onClick={this.toggle} block>
    //       {`${title} (${release_date.slice(0, 4)})`}
    //     </Button>
    //     <Collapse isOpen={this.state.collapse}>
    //       <Card>
    //         <CardImg top
    //                  width="25%"
    //                  className="center-block"
    //                  src={`${posterURL}${poster_path}`} alt={`${title}_poster`} />
    //         <Button type="button"
    //                 color="secondary"
    //                 onClick={this.toggleSelect}>
    //           <span className="glyphicon glyphicon-ok"
    //                 style={this.state.selected ? styles.checked : styles.unchecked}
    //                 aria-hidden="true">
    //           </span>
    //         </Button>
    //         <CardBody>
    //           <CardTitle>{title}</CardTitle>
    //           <CardText>{overview}</CardText>
    //         </CardBody>
    //       </Card>
    //     </Collapse>
    //   </div>
    // )
  }
}


export default MovieDetails
