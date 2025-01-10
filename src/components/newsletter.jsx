import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Newsletter() {

    return (
        <div>
            <Navbar />
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
                    <button style={{ padding: "5px", backgroundColor: "blue", borderRadius: "4px", color: "white", fontWeight: "bold" }}>Subscribe</button>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Newsletter