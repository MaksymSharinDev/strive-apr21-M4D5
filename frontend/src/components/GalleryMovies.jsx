//SRP
/*
Here we control Movie component generation basing upon the data we have passed by as props
 */
// import './App.css'
import { Component} from 'react'
import { Row, Container } from 'react-bootstrap'
import SingleMovie from './SigleMovie'

class GalleryMovies extends Component {
    state = {  
        galleryMovies: []
    }
    render() { 
        return (  
            <Container fluid className='py-3' >
                <h4 className='ml-4 text-light'> Gallery Title</h4>
                <div className='mx-1 ms-slider ms-slider--enlarge '>
                    <div className='ms-slider__inner'>
                        {/* {this.state.galleryMovies.map(movie => <SingleMovie movieInfo={movie}/>)} */}
                        <SingleMovie />
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

    componentDidMount = async () => {
        const query = 'Al+Pacino'
        const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=721c816a&s='

        const response = await fetch( apiUrl + query)
        // console.log(response)
        const data = await response.json()
        // console.log(data.Search)
        this.setState({
            galleryMovies: data.Search
        })
    }
}
 
export default GalleryMovies;

