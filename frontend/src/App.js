import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import CommentWidget from "./components/CommentWidget";
//import { /*boostrap-comp*/} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar />
      <CommentWidget author="Emilian" />
      <CommentWidget author="Maksym" />
      <CommentWidget author="Nando" />
      <CommentWidget author="Mike" />
    </div>
  );
}

export default App;
