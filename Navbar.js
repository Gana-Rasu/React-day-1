import React from "react";

function Navbar(){
return(
    <nav className=" navbar-block navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="/#">
      <img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="" width="56" height="56"/>
    </a>
  </div>
</nav>
    <a className="navbar-brand" href="/#">Start Bootstrap</a>
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item dropend">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropend">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Templates
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropend">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bundles
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/#">Forms</a>
        </li>

        <li className="nav-item dropend">
          <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>

       
      </ul>
      <form  className="d-flex">
          <a className="nav-link" href="/#">Blog</a>
        <button className="btn-nav" type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav>
);
}

export default Navbar;