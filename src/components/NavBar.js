import React, {Component} from 'react';

class NavBar extends Component{



  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-default navbar-fixed-side-left" role="navigation">
            <div className="navbar-header">
              <button type="button" className="pull-left navbar-toogle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Desplegar navegacion</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-logobox">
                <a href="/">
                  <img src="" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a>Home</a></li>
                <li><a>Bio</a></li>
                <li><a>Description</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

}

export default NavBar;
