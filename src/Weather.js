import React from 'react';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weatherData: {},

        }
    }



    handleInput = (event) => {
        this.setState({
            weatherType: event.target.value

        })
    };


    weatherSubmit = async (event) => {
        event.preventDefault();
        let url = 
    }
}