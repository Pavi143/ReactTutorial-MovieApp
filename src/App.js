import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?&api_key=6388b18a35180a4c323d445389f92fc3';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark' fixed='top' style={{ width: '100%' }}>
        <Container fluid>
          <Navbar.Brand href='https://www.themoviedb.org/movie'style={{fontFamily:'serif'},{fontWeight:'1000'}}>MovieDb App</Navbar.Brand>
          <Navbar.Brand href='https://www.themoviedb.org/list/49435'style={{fontFamily:'serif'},{fontWeight:'1000'}}>Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: '100px' }}>
                {/* Add Nav links if needed */}
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar>
      <div className='container'>
        <div className='grid'>
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
