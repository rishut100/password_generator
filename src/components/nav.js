import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="navbar-inverse navbar bg-dark ">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="justify-content-centre align-item-centre">
            <span className="highlight text-light">Password Generator</span>
          </h1>
          <small className="text-success">
            Generates the most secure password
          </small>
        </div>
      </div>
    </nav>
  );
}
