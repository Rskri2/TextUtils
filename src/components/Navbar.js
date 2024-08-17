import React from "react";
import PropTypes from "prop-types";
import{

  Link
}from 'react-router-dom'
export default function Navbar(props) {
  const change_mode = (mode)=>{
    if(mode === 'dark')return 'light';
    if(mode === 'light')return 'dark';
    else{
      return 'light';
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar bg-${props.mode !== 'light' ? 'dark': 'light'}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${change_mode(props.mode)}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${change_mode(props.mode)}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${change_mode(props.mode)}`} to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="switches">
              <div className="circle" style={{backgroundColor:'green',cursor:'pointer'}} onClick ={()=>props.toogleMode('success')}>
              </div>
            <div className="circle" style= {{backgroundColor:'yellow',cursor:'pointer'}} onClick ={()=>props.toogleMode('warning')}>
            </div>
            <div className="circle" style= {{backgroundColor:'red',cursor:'pointer'}} onClick ={()=>props.toogleMode('danger')}>
            </div>
            <div className="circle" style= {{backgroundColor:'blue',cursor:'pointer'}} onClick ={()=>props.toogleMode('primary')}>
            </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" onClick ={()=>props.toogleMode('dark')}
            />
          </div>
          <div className= {`text-${change_mode(props.mode)}`}>
          Toogle Mode
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  about: "About",
};
