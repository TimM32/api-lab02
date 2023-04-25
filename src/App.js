import React from "react";
import axios from 'axios';
import { Button } from "react-bootstrap/lib/InputGroup";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            cityData: {},
            error: false,
            errorMessage: '',
            locationLat: '',
            locationLon: '',
            locationMap: '',
        };
    }
}

handleCitySubmit = async (event) => {
    event.preventDefault();

    try {

        let url = (`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY_LOCATION}&q=${this.state.city}&format=json`);

        let cityInfo = await axios.get(url);

        let locationMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY_LOCATION}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=12`







        let locationLat = cityInfo.data[0].lat;
        let locationLon = cityInfo.data[0].lon;

        this.setState({
            cityName: cityInfo.data[0],
            error: false,
            locationLat: locationLat,
            locationLon: locationLon,
            locationMap: locationMap,
        });
    } catch (error) {
        this.setState({
            error: true,
            errorMessage: `Error has occured: ${error.response.status}`,
        });
    }
};

handleCityInput = (event) => {
    this.setState({
        city: event.target.value,
    });
}

render() {

    return (

        <>
            <header>
                <h1>API Data Locations</h1>
            </header>
            {this.state.error ? (
                <p>{this.state.errorMessage}</p>
            ) : (
                <ul>{this.state.cityData}</ul>
            )}
            <form onSubmit={this.handleCitySubmit}>
                <label>
                    Choose City:
                    <input type="text" onChange={this.handleCityInput} />
                </label>
                <Button type="submit">Find Cities</Button>
            </form>
            <Card className="location-cards" id='location'>
                <Card.body>
                    <Card.Title>Enjoy {this.state.city}!</Card.Title>
                    <Card.Text>
                        <p>Latitude: {this.state.locationLat} , Longitude: {this.state.locationLon} </p>
                    </Card.Text>
                    <Card.Img
                        className="cardImage"
                        src={this.state.locationMap}
                    />
                </Card.body>
            </Card>


        </>
    );


}






export default App;