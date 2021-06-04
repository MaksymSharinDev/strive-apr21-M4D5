//SRP
/*
Display our mega fancy component basing upon data passed as prop
 */
// import './App.css'
import { Component } from 'react'

class SingleMovie extends Component {
    state = {  }
    render() { 
        return (  
            <div className='tile'>
                <div className='tile__media'>
                    {/* <img className='tile__img' src={this.props.movieInfo.Poster} alt="movie cover" /> */}
                    <img className='tile__img' src="assets/media/media32.jpg" alt="movie cover" />
                </div>
                <div className='tile__details'>
                    <div className='tile__title'>
                        Watch Now
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SingleMovie;