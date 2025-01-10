import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function ContactUs() {
  return (
    <div id='contact'>
      <Navbar />
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="text-center mb-3 pb-3" style={{ letterSpacing: "5px" }}>
            <h6 class="text-primary text-uppercase">Contact</h6>
            <h1>Contact For Any Query</h1>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-8">
              <div class="contact-form bg-white" style={{ padding: '30px' }}>
                <div id="success"></div>
                <form name="sentMessage" id="contactForm">
                    <input type="text" class="form-control" id="name" placeholder="Your Name"
                      required="required" data-validation-required-message="Please enter your name" />
                    <p class="help-block text-danger"></p>
                  <div class="form-row">
                    <input type="email" class="form-control" id="email" placeholder="Your Email"
                      required="required" data-validation-required-message="Please enter your email" />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <input type="text" class="form-control" id="subject" placeholder="Subject"
                      required="required" data-validation-required-message="Please enter a subject" />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="control-group">
                    <textarea class="form-control px-4" rows="5" id="message" placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )}
export default ContactUs