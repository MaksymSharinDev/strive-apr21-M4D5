//SRP
/*
Here just a transposition of Nav in react-bootstrap components
Control Coordination
by SearchBar and Search results
 */
//Iteration 1:
import {Component} from "react";
import { Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class NavBar extends Component {
    state = {
        fetchedMovies: []
    }

    onSearchFetch = (fetchedMovies) => {
        this.setState({fetchedMovies : fetchedMovies})
    }


    render() {
        return (
            <Row>
                <Col className={"col-12"}>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="assets/netflix_logo.png"
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav className={"ml-auto"}>
                                <SearchBar callback={this.onSearchFetch}/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col className={"col-12"}>
                    <SearchResults movies={this.state.fetchedMovies}
                                   className={!!this.state.fetchedMovies ? null : 'collapsed'}/>
                </Col>
                <br/>
            </Row>


        )
    }
}

export default NavBar