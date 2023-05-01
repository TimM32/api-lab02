import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'


class MovieContent extends React.Component {

  render() {

    return (
      <>
        <Card id="movie-card" >
          <Card.Body>
          <Card.Title> Title: {this.props.date.title}</Card.Title>
            <Card.Img src={this.props.date.imageUrl} />
            <Card.Text> Date Of Release: {this.props.date.release_date} </Card.Text>
            <Card.Text> Overview: {this.props.date.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieContent;