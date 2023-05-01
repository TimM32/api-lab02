import React from 'react';
import MovieInfo from './MovieInfo.js'
import './App.css'


class Movie extends React.Component {

    render() {
        
        return (
            <>
                <h3>Movies: </h3>
                {
                    this.props.movieData.map((date, index) => {
                        return <MovieInfo key={index} date={date}/>;
                    })
                }
            </>
        )
    }
}

export default Movie;
