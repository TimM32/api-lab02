import React from "react";
import axios from 'axios';


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


