import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import imghome from '../assets/img-home.png'
import Banner from './Banner';
import book_indian from '../assets/books/modern-indian.jpeg';
import book_psycho from '../assets/books/the-psychology-of-money.jpeg'
import book_attraction from '../assets/books/the-law-of-attraction.jpeg'
import book_silent from '../assets/books/the-silent-patient.jpeg'
import book_thoughts from '../assets/books/thoughts-to-inspire.jpeg'
import book_human from '../assets/books/the-laws-of-human-nature.jpeg'
import book_power from '../assets/books/48-laws-of-power.jpeg'
import book_thinking from '../assets/books/eliminate-negative-thinking.jpeg'
import book_soul from '../assets/books/the-soul-of-care.jpeg'
import book_garden from '../assets/books/the-secret-garden.jpeg'
import book_hawking from '../assets/books/brief-answers-to-the-big-questions.jpeg'
import book_brain from '../assets/books/the-brain-original-imagk5qum6xuh22k.jpeg'

/*
function dark() {
  var theme = document.getElementById("theme");
  theme.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
  }
}*/


function Home() {
  return (
    <div id='ihome'>
      <Navbar />
      <Banner />
      {/* About Start */} 
      
{/* <button id='theme' onClick={dark}>Dark</button>  */ }
      

      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img class="img-fluid rounded mb-4 mb-lg-0" src={imghome} alt="" />
            </div>
            <div class="col-lg-7">
              <div class="text-left mb-4">
                <h5 class="text-primary text-uppercase mb-3 about-h5">About Us</h5>
                <h1>Innovative Way To Learn</h1>
              </div>
              <p>Our first wish is to provide you with a better solution to solve your problem. So, kindly if you
                don't get any solution then mention it in the comment section.
                Also, we are trying to provide fresh & latest content that provides you ideas about all updated
                information that's happening in the world.
                This E-Library provide technology related articles or post which students can read and access
                easily.</p>
              <Link to="/about" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */ }
  {/* Explore Start*/ }
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Destination</h6>
        <h1>Explore Top Books</h1>
      </div>
      <div class="row row-img" >
        <div class="col-sm con-img" id='img-hover'><img src={book_psycho} class="book-img" /></div>
        <div class="col-sm con-img" id='img-hover'><img src={book_indian} class="book-img" /><br /></div>
        <div class="col-sm con-img" id='img-hover'><img src={book_thoughts} class="book-img" /></div>
        <div class="col-sm con-img" id='img-hover'><img src={book_attraction} class="book-img" /></div>
        <div class="col-sm con-img" id='img-hover'><img src={book_silent} class="book-img" /></div>
        <div class="col-sm con-img" id='img-hover'><img src={book_human} class="book-img" /></div>
      </div>
      <br />
      <div class="row book-row" >
        <div class="col-sm float-left" id='img-hover'>
          <img src={book_power} class="book-img" />
        </div>
        <div class="col-sm" id='img-hover'>
          <img src={book_thinking} class="book-img" /><br />
        </div>
        <div class="col-sm" id='img-hover'>
          <img src={book_soul} class="book-img" />
        </div>
        <div class="col-sm" id='img-hover'>
          <img src={book_garden} class="book-img" />
        </div>
        <div class="col-sm" id='img-hover'>
          <img src={book_hawking} class="book-img" />
        </div>
        <div class="col-sm" id='img-hover'>
          <img src={book_brain} class="book-img" />
        </div>
      </div>
    </div>
  </div>
  {/*Explore End*/ }
      <div>
        <hr />
        <br /><br />
        <div id='Newsletter'>
          <div class="container">
            <h2>Subscribe to our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem aperiam, provident repellat quis voluptatum culpa ad enim tenetur eligendi modi ipsum eos, neque blanditiis voluptatibus quisquam velit reiciendis mollitia!</p>
          </div>
          <div className='container'>
            <input typeof='text' placeholder='Name' style={{ padding: "5px" }} /><br /><br />
            <input type='text' placeholder='Email address' style={{ padding: "5px" }} /><br /><br />
            <input type='checkbox' /> Daily Newsletter
            <br /><br />
            <button className='btn-subscribe'>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
export default Home