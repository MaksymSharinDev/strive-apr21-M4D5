
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import  NavBar from "./components/Navbar"
// import GalleryMovies from './components/GalleryMovies';
import GallerySection from './components/GallerySection';


//import { /*boostrap-comp*/} from 'react-bootstrap'
function App() {
  let galleries = ['Avengers', 'Lord of the rings', 'Alien']
  return (
      <>
        <NavBar/>
        <GallerySection galleryArr={galleries}/>
      </>
  );
}

export default App;
