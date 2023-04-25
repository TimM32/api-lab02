import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";


class CitySearch extends Component {

  handleCitySubmit = async (event) => {
    event.preventDefault();
    this.props.displayLatLon();
  };
  
  render() {
    return (
      <Form onSubmit={this.handleCitySubmit}>
        <label>
          Choose City:
          <input type="text" onChange={this.props.handleCityInput} />
        </label>
        <Button type="submit">Find Cities</Button>
      </Form>
    );
  }
}

export default CitySearch;




