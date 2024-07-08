import React from "react";
import { Link } from "react-router-dom";
function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add">Create Staff</a>
        </li>
      </ul>
      <form className="d-flex">

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;