import React from 'react';
import logo from './assets/img/vsee-logo.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <header className="p-2 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-auto">
              <img src={logo} alt="Logo" width="80" />
            </a> 

            <div className="text-end">
              <a href="#" className="d-block link-dark text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="icon icon-desktop"><FontAwesomeIcon icon={faDesktop} /></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="card">
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
