//SRP
/*
Here just a transposition of foot in react-bootstrap components
 */


//API fetch
// TOP DOWN
// FIst get ready the api
//--> data
//we can test gallerySection component Data retrieving
//in the last we can model our movie component taking inspiration from the legacy project
const getMovies = async () => {
    let fetchedMovies = []
    let inputMovieObj = {
        Title: '',
        Year: '',
        imdbID: '',
        Type: '',
        Poster: ''
    }

    await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=721c816a&s=Sylvester+Stallone`).then(res => res.json())
        .then(data => data.Search.map( obj => fetchedMovies.push(
            {
                Title: obj.Title,
                Year: obj.Year,
                imdbID: obj.imdbID,
                Type: obj.Type,
                Poster: obj.Poster
            }))
        )

    await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=721c816a&s=Al+Pacino`).then(res => res.json())
        .then(data => data.Search.map(obj => fetchedMovies.push(
            {
                Title: obj.Title,
                Year: obj.Year,
                imdbID: obj.imdbID,
                Type: obj.Type,
                Poster: obj.Poster
            })))
    return fetchedMovies
}