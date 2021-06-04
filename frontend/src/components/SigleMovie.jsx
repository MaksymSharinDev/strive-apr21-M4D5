//SRP
/*
Display our mega fancy component basing upon data passed as prop
 */
import '../styles/SingleMovie.css'
import { Component } from 'react'

class SingleMovie extends Component {
    state = {  }
    render() {

        return (  
            <div className='tile' id={this.props.movieInfo.imdbID}>
                <div className='tile__media'>
                   <img className='tile__img' src={this.props.movieInfo.Poster} alt="movie cover" />
                </div>
                <div className='tile__details'>
                    <div className='tile__p'>
                        {"Title: " + this.props.movieInfo.Title}
                    </div>
                    <div className='tile__p'>
                        {"Year: " + this.props.movieInfo.Year}
                    </div>
                    <div className='tile__p'>
                        {"Type: " + this.props.movieInfo.Type}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SingleMovie;