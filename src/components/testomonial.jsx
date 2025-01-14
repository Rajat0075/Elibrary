import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import profile from '../assets/profile.jpg'
function testomonial() {
    return (
        <div id='Testomonial'>
            <Navbar />
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-3 pb-3" >
                        <h6 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h6>
                        <h1>What Say Our Clients</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel">
                        <div class="text-center pb-4">
                            <img class="img-fluid mx-auto" src={profile} style={{ width: "100px", height: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5><span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src={profile} style={{ width: "100px", height: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5><span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src={profile} style={{ width: "100px", height: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src={profile} style={{ width: "100px", height: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )}
export default testomonial