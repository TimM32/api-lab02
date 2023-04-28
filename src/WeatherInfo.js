import React from "react";
import { Card } from 'react-bootstrap'
import './App.css'

class WeatheInfo extends React.Component {
    render() {
        return (
            <>
                <Card id='forcast-display'>
                    <Card.body>
                        <Card.Text>Date: {this.props.day.date}</Card.Text>
                        <Card.Text>Forecast: {this.props.day.forecast}</Card.Text>
                    </Card.body>
                </Card>
            </>
        )
    }
}


export default WeatheInfo;