import React from 'react';
import logo from './assets/img/vsee-logo.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons';

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
                <span className="icon icon-desktop"><FontAwesomeIcon icon={faDesktop} /> Test Computer</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="card vsee-card">
          <h6 className="card-header bg-primary"><FontAwesomeIcon icon={faVideo} /> Talk to An Nguyen</h6>
          <div className="card-body">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
            </form>
            <button type="button" className="btn btn-danger">Go somewhere</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
