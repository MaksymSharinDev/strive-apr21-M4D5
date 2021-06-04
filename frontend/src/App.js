import './App.css';
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import  NavBar from "./components/Navbar"

import GalleryMovies from './components/GalleryMovies';
import CommentWidget from "./components/CommentWidget";
import FooterNetflix from "./components/FooterNetflix";

function App() {
  return (
      <div className="App">
        <NavBar />
        <GalleryMovies/>
        <GalleryMovies/>
        <GalleryMovies/>
        <CommentWidget author="Emilian" />
        <CommentWidget author="Maksym" />
        <CommentWidget author="Nando" />
        <CommentWidget author="Mike" />
        <FooterNetflix />
      </div>
  );
}

export default App;
