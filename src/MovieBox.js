import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'; // Make sure to import Modal from 'react-bootstrap'
const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieBox = ({ title1, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='card text-center bg-secondary mb-3'>
      <div className='card-body'>
        <img className='card-img-top' src={API_IMG + poster_path} alt='' />

        <div>
          <br />
          <button type='button' className='btn btn-dark' onClick={handleShow}>
            View more
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{title1}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <img className='card-img-top' src={API_IMG + poster_path} alt='' />
              <br>
              </br>
              <h3>{title1}</h3>
              <h4>IMDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
