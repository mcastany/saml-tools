import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function Index({ children }) {
  return (
    <div>
      <nav className="navbar navbar-static-top navbar-dark bg-inverse">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/encoder">Encoder</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deflator">Deflate</Link>
          </li>
        </ul>
      </nav>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">SAML TOOLS</h1>
        </div>
      </div>
      <div className="container" style={{ marginTop: '1.5em' }}>{children}</div>
  </div>
  )
}