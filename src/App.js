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
        };
    }
}



// let url 
// let cityInfo


let locationLat = cityInfo.data[0].lat;
let locationLon = cityInfo.data[0].lon;

this.setState({
    cityName: cityInfo.data[0],
    error: false,
    locationLat: locationLat,
    locationLon: locationLon
});
