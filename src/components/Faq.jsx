import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Faq() {
    return (
        <div id='Faq'>
            <Navbar />
            <br/><br/>
            <div className='container-sm'>
                <h2>FAQ</h2>
                <hr/>
                <br />
                <div>
                    <h5>What Is An <span style={{color:"black"}}>E-</span><span style={{color:"blue"}}>Library</span>?</h5>
                    <p>An e-library is a digital platform that provides access to a wide range of books, articles, journals and other forms of literature in electronic format. It allows users to access and read digital content using computers using computers, tablets, smartphones, or dedicated e-readers.</p>
                </div>
                <div>
                    <h5>What Materials Are Available In A <span style={{color:"black"}}>E-</span><span style={{color:"blue"}}>Library</span>?</h5>
                    <p>E-library offer a diverse range of materials, including e-books, audiobooks, academic journals, research papers, magazines, newspapers, and other forms of digital media. The specific collection varies depending on the elibrary, but many platform provide a wide variety of genres and subjects.</p>
                </div>
                <div>
                    <h5>Are <span style={{color:"black"}}>E-</span><span style={{color:"blue"}}>Library</span> Free To Use?</h5>
                    <p>The availability and cost of e-libraries offer free access to their digital collections while others may require a subscription or membership fee.</p>
                </div>
                <div>
                    <h5><span style={{color:"black"}}>E-</span><span style={{color:"blue"}}>Library</span> Provide PDF of Books?</h5>
                    <p>Yes, E-Library also provides PDF of books for free of cost. </p>
                </div>
                <div>
                    <h5>How To Find A Book on <span style={{color:"black"}}>E-</span><span style={{color:"blue"}}>Library</span>?</h5>
                    <p>In E-Library books are divide into group of similar books, topic and topics.</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Faq
