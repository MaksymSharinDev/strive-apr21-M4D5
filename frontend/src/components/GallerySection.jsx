import { Component } from 'react'
import GalleryMovies from "./GalleryMovies"

class GallerySection extends Component {
    state = {  
        movieArray: [],
        // isLoading: true
    }
    render() { 
        return (  
            <>
                {this.state.movieArray.map((gallery, i) => <GalleryMovies key={i} galleryInfo={gallery} galleryTitle={this.props.galleryArr[i]}/> )}
            </>
        );
    }

    fetchContent = async (gallery) => {
        const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=721c816a&s='
        const query = gallery

        const response = await fetch( apiUrl + query)
        const data = await response.json()
        this.setState({
            movieArray: [...this.state.movieArray, data.Search]
        })
        return data.Search
    }
    
    componentDidMount = async () => {
        this.props.galleryArr.map(gallery => {
           this.fetchContent(gallery)
        })
    }
}
 
export default GallerySection;
