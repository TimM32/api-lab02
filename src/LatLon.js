import React from "react";
import { Card } from "react-bootstrap";

class LatLon extends React.Component {
  render() {
    return (
      <>
        <Card className="location-cards" id="location">
          <Card.Body>
            <Card.Title>Enjoy {this.props.city}!</Card.Title>
            <Card.Text className='card-text'>
                Latitude: {this.props.lat}<br></br>
                Longitude:{this.props.lon}      
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LatLon;
