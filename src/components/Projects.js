import React from 'react';
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";

function Projects (props) {
  return (
    <div id="projects_div">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="my-navbar-brand" to="/">
          <Animated animationIn="bounceInLeft"><img id="my-logo" src="http://www.pvhc.net/img144/mxucxzruwiwrnmmzlxxl.png" alt="Home" /></Animated>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <div className="collapse my-navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="my-nav-link" to="/resume">Résumé<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/projects">Web Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="my-nav-link" to="/gallery">Photoshop Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <iframe src="https://player.vimeo.com/video/8981918?autoplay=true&loop=1&controls=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
      </div>
    </div>
  );
}

export default Projects;