//SRP
/*
Here we control Movie component generation basing upon the data we have passed by as props
 */
// import './App.css'
import { Component} from 'react'
import { Row, Container } from 'react-bootstrap'
import SingleMovie from './SigleMovie'

class GalleryMovies extends Component {
    state = {  }
    render() { 
        return (  
            <Container fluid className='py-3' >
                <h4 className='ml-4 text-light'> Gallery Title</h4>
                <div className='mx-1 ms-slider ms-slider--enlarge '>
                    <div className='ms-slider__inner'>
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                        <SingleMovie />
                    </div>
                </div>
            </Container>
        );
    }
}
 
export default GalleryMovies;