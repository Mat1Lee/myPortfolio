import { faBookOpen, faEnvelope, faFileAlt, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const toggleShow = ()=> {
  document.getElementById('expand').setAttribute('aria-expanded', false);
  document.getElementById('navbarNav').classList.toggle('show')
  }
  return (
<div>
  <header className="sticky-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand w-25" href="#">
            <img className="w-75" src="icons/logo.png" alt />
          </a>
          <button id="expand" className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul onclick="{toggleShow}" className="navbar-nav my-nav-style">
              <li className="nav-item ms-1">
                <navlink to="/" exact="{true}" classname="nav-link text-white" activeclassname="active"><span><fontawesomeicon icon="{faHome}" /></span> Home</navlink>
              </li>
              <li className="nav-item ms-1">
                <navlink to="/about" classname="nav-link text-white" activeclassname="active"><span><fontawesomeicon icon="{faUser}" /></span> About Me</navlink>
              </li>
              <li className="nav-item ms-1">
                <navlink to="/resume" classname="nav-link text-white" activeclassname="active"><span><fontawesomeicon icon="{faFileAlt}" /></span> Resume</navlink>
              </li>
              <li className="nav-item ms-1">
                <navlink to="/projects" classname="nav-link text-white" activeclassname="active"><span><fontawesomeicon icon="{faProjectDiagram}" /></span> Projects</navlink>
              </li>
              <li className="nav-item ms-1">
                <navlink to="/contact" classname="nav-link text-white" activeclassname="active"><span><fontawesomeicon icon="{faEnvelope}" /></span> Contact</navlink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</div>

  );
};

export default Header;