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
      <CommentWidget />
    </div>
  );
}

export default App;
