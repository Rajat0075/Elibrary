import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='Navbar'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{ backgroundColor: "white" }}>
          <a class="navbar-brand" href="#"><h3 class="text-primary"><span class="text-black">E-</span>Library</h3></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/" >  Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="">
                  Subjects
                </Link>
                <ul class="dropdown-menu hover-menu">
                  <li><Link class="dropdown-item hover" to="">Project</Link></li>
                  <li><Link class="dropdown-item hover" to="">News</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link class="dropdown-item" to="/library">E-Library</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li><Link class='dropdown-item' to='/newsletter'>Newsletter</Link></li>
                  <li><Link class="dropdown-item" to="/testomonial">Testimonial</Link></li>
                  <li><Link class='dropdown-item' to="/faq">FAQ</Link></li>
                  <li><Link class="dropdown-item" to="/notfound">Page 404</Link></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><Link className='dropdown-item' to="/policy">Privacy & Policy</Link></li>
                </ul>
              </li>
              <li class="nav-item"><Link class="nav-link" aria-current to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )}
export default Navbar