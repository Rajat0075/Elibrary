import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



function notfound() {
    return (
        <div id='notfound'>
            <Navbar />
            <br /><br />
            <div className='container' style={{ padding: "10%"}}>
                <h1>404</h1>
                <p>Opps! Page Not Found</p>
                <p>The Page You Were Looking For Doesn't Exist</p>
            </div>
            <Footer />
        </div>
    )
}

export default notfound
