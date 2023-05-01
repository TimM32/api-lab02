import React from 'react';
import { Card } from 'react-bootstrap'


class YelpInfo extends React.Component {

  render() {

    return (
      <>
        <Card id="foodcard" >
          <Card.Body>
            <Card.Img src={this.props.date.image_url} />
            <Card.Title>Name: {this.props.date.name}</Card.Title>
            <Card.Text>Hours: {!this.props.date.is_closed ? 'Open': 'Closed'}</Card.Text>
            <Card.Text>Rating: {this.props.date.rating}</Card.Text>
            <Card.Text>Price: {this.props.date.price || 'Not Available'}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default YelpFeedback;