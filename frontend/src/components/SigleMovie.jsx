//SRP
/*
Display our mega fancy component basing upon data passed as prop
 */
import '../styles/SingleMovie.css'
import { Component } from 'react'

class SingleMovie extends Component {
    state = {  }
    render() {

        /*
        <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <p>{props.movie.imdbID}</p>
            <p>{props.movie.Type}</p>
            <p>{props.movie.Poster}</p>
        */
        return (  
            <div className='tile' id={this.props.movie.imdbID}>
                <div className='tile__media'>
                   <img className='tile__img' src={this.props.movie.Poster} alt="movie cover" />
                </div>
                <div className='tile__details'>
                    <div className='tile__p'>
                        {"Title: " + this.props.movie.Title}
                    </div>
                    <div className='tile__p'>
                        {"Year: " + this.props.movie.Year}
                    </div>
                    <div className='tile__p'>
                        {"Type: " + this.props.movie.Type}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SingleMovie;