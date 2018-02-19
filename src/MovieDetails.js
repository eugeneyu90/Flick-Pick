import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';
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
      collapse: false
    }
  }
    
  toggle = () => {
    this.setState({ 
      collapse: !this.state.collapse
    });
  }


  render() {
    const { id, title, release_date, overview, poster_path } = this.props.movie


    return (
      <div>
        <Button color="secondary" onClick={this.toggle} block>
          {`${title} (${release_date.slice(0, 4)})`}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardImg top width="50%" src={`${posterURL}${poster_path}`} alt={`${title}_poster`} />
            <CardBlock>
              <CardTitle>{title}</CardTitle>
              <CardText>{overview}</CardText>
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    )
  }
}


export default MovieDetails
