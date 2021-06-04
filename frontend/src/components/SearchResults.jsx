//SRP
/*
show provided data as movie components
 */

import '../styles/SearchBar.css'
import {Component} from "react";
import {Col, Row} from "react-bootstrap";
//import SingleMovie from './SigleMovie'
//import  from 'react-bootstrap'

//Mock For Testing
const SingleMovie = function(props)
{
    return (
        <div
            style={
                {
                    width: '140x',
                    minHeight: '100%',
                    border: 'solid 1px black',
                    borderRadius: '15px',
                    justifyContent: 'center',
                    padding: '10px',
                    overflowWrap: 'break-word'
                }
            }>
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <p>{props.movie.imdbID}</p>
            <p>{props.movie.Type}</p>
            <p>{props.movie.Poster}</p>
        </div>
    )
}


class SearchResults extends Component {

    render() {
        return (
            <section id={'#searchResults'}>
                <Row className={'no-gutters'}>
                    {this.props.movies.map(obj =>
                        <Col className={'col-3 p-3'}>
                        <SingleMovie movie={obj}/>
                        </Col>
                    )}
                </Row>

            </section>
        )
    }
}

export default SearchResults