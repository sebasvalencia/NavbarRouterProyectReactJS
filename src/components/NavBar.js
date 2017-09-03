import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './react-logo.png';
import '../styles/NavBar.css';

class NavBar extends Component{

  render(){
    return(
      <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand " href="#">
                <img className="navbar-logo" src={logo} alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item navbar-listitem active ">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item navbar-listitem">
                    <Link className="nav-link" to="/bio">Bio</Link>
                  </li>
                  <li className="nav-item navbar-listitem">
                    <Link className="nav-link" to="/description">Description</Link>
                  </li>
                  <li className="nav-item navbar-listitem">
                    <Link className="nav-link disabled" to="/contact-us">Contact us</Link>
                  </li>
                </ul>

              </div>
            </nav>

      </div>
    );
  }

}

export default NavBar;
