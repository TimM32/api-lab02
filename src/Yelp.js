import React from 'react';
import YelpContent from './YelpInfo.js'
import './App.css'

class Yelp extends React.Component {

    render() {
        return (
            <>
                <div id='food'>
                    {this.props.yelp.map((date, index) => (
                        <YelpContent key={index} day={date} />
                    ))
                    }
                </div>
            </>
        )
    }
}


export default Yelp;