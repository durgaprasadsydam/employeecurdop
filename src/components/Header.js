import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header() {
    return (
      <div>
        <div className='container-fluid p-0'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/basicfunc">Basic Func</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Login</Link>
                  </li><li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      );
}

export default Header;
