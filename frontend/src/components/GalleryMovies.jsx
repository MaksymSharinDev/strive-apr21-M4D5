//SRP
/*
Here we control Movie component generation basing upon the data we have passed by as props
 */
import { Component} from 'react'
import { Container } from 'react-bootstrap'
import SingleMovie from './SigleMovie'

class GalleryMovies extends Component {
    state = {}

    render() { 
        return (  
            <Container fluid className='py-1' >
                <h4 className='ml-4 text-light'><strong>{this.props.galleryTitle}</strong></h4>
                <div className='mx-1 ms-slider ms-slider--enlarge '>
                    <div className='ms-slider__inner'>
                        {this.props.galleryInfo.map(movie => <SingleMovie key={movie.imdbID} movieInfo={movie}/>)}
                    </div>
                </div>
            </Container>
        );
    }

}
 
export default GalleryMovies;

