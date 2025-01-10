import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div id='Footer'>
            <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
                <div class="row pt-5">
                    <div class="col-lg-3 col-md-6 mb-5">
                        <a href="" class="navbar-brand">
                            <h1 class="text-primary"><span class="text-white">E-</span>Library</h1>
                        </a>
                        <p>Read book in digitally format Unlimited<br /> on E-Library</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h5 class="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Our Services</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white-50 mb-2" href="#">About</a>
                            <a class="text-white-50 mb-2" href="#">E-Library</a>
                            <a class="text-white-50 mb-2" href="#">Services</a>
                            <a class="text-white-50 mb-2" href="#"><Link to='/testomonial'>Testimonial</Link></a>
                            <a class="text-white-50" href="#">Blog</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5">
                        <h5 class="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Usefull Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white-50 mb-2" href="#">About</a>
                            <a class="text-white-50 mb-2">Services</a>
                            <a class="text-white-50 mb-2">Guides</a>
                            <a class="text-white-50 mb-2">Testimonial</a>
                            <a class="text-white-50"><Link to='/notfound'>Page 404</Link></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5" >
                        <h5 class="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Contact Us</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>123 Gomti Nagar, Lucknow, India</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope mr-2"></i>info@elibrary.com</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
                <div class="row">
                    <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0" style={{ border: "rgba(256,256,256,.1) !important" }}>
                        <p class="m-0 text-white-50">Copyright &copy; <a href="#">Domain</a>.<a>All Rights Reserved.</a>
                        </p>
                    </div>
                    <div class="col-lg-6 text-center text-md-right">
                        <p class="m-0 text-white-50">Designed by <a href="#">Rajat Kumar</a></p>
                    </div>
                </div>
            </div>
        </div>
    )}
export default Footer