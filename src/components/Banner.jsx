import React from 'react'
import img1 from '../assets/Technology.jpg'
import img2 from '../assets/Technology.jpg'

function Banner() {
    return (
        <div>
            <div class="container-fluid p-0">
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={img1} alt="Image"/>
                                <div class="carousel-caption d-flex flex-column" style={{justifyContent:"center", alignItems:"center"}}>
                                    <div class="p-3" style={{maxWidth:"900px"}}>
                                        <h4 class="text-white text-uppercase mb-md-3">Electronic Book</h4>
                                        <h1 class="display-3 text-white mb-md-4">Let's Read The Book Free</h1>
                                        <a href="" class="btn btn-primary py-md-3">Explore</a>
                                    </div>
                                </div>
                        </div>
                        <div class="carousel-item" >
                            <img class="w-100" src={img2} alt="Image"/>
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style={{maxWidth:"900px"}}>
                                        <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                        <h1 class="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                        <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style={{width:"45px",height:"45px"}}>
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style={{width:"45px",height:"45px"}}>
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Banner