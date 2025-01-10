import React from 'react'
import book1 from '../assets/books/48-laws-of-power.jpeg'
import book2 from '../assets/books/the-law-of-attraction.jpeg'
import book3 from '../assets/books/the-silent-patient.jpeg'
import book_law_human from '../assets/books/the-laws-of-human-nature.jpeg'
import book_thoughts from '../assets/books/thoughts-to-inspire.jpeg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function library() {
    return (
        <div id='Library'>
            <Navbar />
            <br /><br />
            <div class="container-fluid">
                <div class="row-cols-auto justify-content-between align-items-center g-2">
                    <div class="col">
                        <div class="container-md">
                            <img src={book1} style={{ float: "left", width: "170px", paddingRight: "10px" }} />
                            <h2>The 48 Laws of Power</h2>
                            <p>
                                <ul id='liststyle-none'>
                                    <li><strong>Publisher:</strong>Profile Books Ltd</li>
                                    <li><strong>Genre:</strong>Body, Mind & Spirit</li>
                                    <li><strong>Edition:</strong>2000</li>
                                    <li><strong>Pages:</strong>480</li>
                                </ul>
                            </p>
                            <button class="btn-download">Download PDF</button>
                        </div>
                        <br /><br /><br /><br /><br /> <br />
                    </div>
                    <hr />
                    <div class="col">
                        <div class="container-md">
                            <img src={book2} style={{ float: "left", width: "160px", paddingRight: "10px" }} />
                            <h2>The Law of Attraction</h2>
                            <p>
                                <ul id='liststyle-none'>
                                    <li><strong>Publisher:</strong>Prabhat Prakashan</li>
                                    <li><strong>Genre:</strong>Fiction</li>
                                    <li><strong>Edition:</strong>1,2018</li>
                                    <li><strong>Pages:</strong>154</li>
                                </ul>
                            </p>
                            <button class="btn-download">Download PDF</button>
                        </div>
                        <br /><br /><br /><br /><br /> <br />
                    </div>
                    <hr />
                    <div class="col">
                        <div class="container-md">
                            <img src={book3} style={{ float: "left", width: "160px", paddingRight: "10px" }} />
                            <h2>The Silent Patient</h2>
                            <p>
                                <ul id='liststyle-none'>
                                    <li><strong>Publisher:</strong>?Orion</li>
                                    <li><strong>Genre:</strong>Thriller</li>
                                    <li><strong>Edition:</strong>2000</li>
                                    <li><strong>Pages:</strong>352</li>
                                </ul>
                            </p>
                            <button class="btn-download">Download PDF</button>
                        </div>
                        <br /><br /><br /><br /><br /> <br />
                    </div>
                    <hr />
                    <div class="col">
                        <div class="container-md">
                            <img src={book_law_human} style={{ float: "left", width: "160px", paddingRight: "10px" }} />
                            <h2>The Law of Human Nature </h2>
                            <p>
                                <ul id='liststyle-none'>
                                    <li><strong>Publisher:</strong>?Orion</li>
                                    <li><strong>Genre:</strong>Self Help</li>
                                    <li><strong>Edition:</strong>2017</li>
                                    <li><strong>Pages:</strong>690</li>
                                </ul>
                            </p>
                            <button class="btn-download"><a href={"https://pdfroom.com/books/the-law-of-human-nature-book-by-robert-greene/avd94Zr05KD/download"}>Download PDF</a></button>
                        </div>
                        <br /><br /><br /><br /><br /> <br />
                    </div>
                    <hr />
                    <div class="col">
                        <div class="container-md">
                            <img src={book_thoughts} style={{ float: "left", width: "160px", paddingRight: "10px" }} />
                            <h2>Thoughts To Inspire</h2>
                            <p>
                                <ul id='liststyle-none'>
                                    <li><strong>Publisher:</strong>Amazing Reads</li>
                                    <li><strong>Genre:</strong>Self Help</li>
                                    <li><strong>Edition:</strong>2018</li>
                                    <li><strong>Pages:</strong>136</li>
                                </ul>
                            </p>
                            <button class="btn-download">Download PDF</button>
                        </div>
                        <br /><br /><br /><br /><br /> <br />
                    </div>
                </div>
                <p style={{textAlign:"center",fontSize:"20px"}}>Previous  <a href='#'>1</a>  <a href='#'>2</a>  <a href='#'>3</a> <a href='#'>4</a>  <a href='#'>5</a>  Next</p>
            </div>
            <Footer />
        </div>
    )}
export default library