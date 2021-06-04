//SRP
/*
retrive data from Search endpoint
Control movie visibility  on a condition

 */
import '../styles/SearchBar.css'
import {Component} from "react";

//import  from 'react-bootstrap'



class SearchBar extends Component {



    movieSearch = async (search) => {
        let fetchedMovies = []
        let inputMovieObj = {
            Title: '',
            Year: '',
            imdbID: '',
            Type: '',
            Poster: ''
        }
        search = search.replace(' ','+')



        try{
            await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=721c816a&s=${search}`).then(res => res.json())
                .then(data => data.Search.map( obj => fetchedMovies.push(
                    {
                        Title: obj.Title,
                        Year: obj.Year,
                        imdbID: obj.imdbID,
                        Type: obj.Type,
                        Poster: obj.Poster
                    }))
                )
            return fetchedMovies
        }catch (e) {
            return []
        }
        
        
    }

    returnResultArray = async (e)=>{
        console.log(e.target.value )
        this.props.callback( await this.movieSearch( e.target.value ) )
    }
    render() {
        return (
            <form className="search-box m-3 mr-5">
                <input type="text" placeholder="search a movie" onInput={this.returnResultArray }/>
                <button type="reset"/>
            </form>
        )
    }
}

export default SearchBar