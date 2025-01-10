import React from 'react'

function Comment() {
  return (
    <div id='commend'>
        <div class="container-fluid" style={{textAlign:"center", backgroundColor:'white', borderRadius:"6px", padding:"15px" }}>
            <h2>Leave a Comment</h2>
            <p>Required fields are marked*</p>
            <textarea placeholder='Comment*' style={{width:"460px",padding:"10px"}}/>
            <br/><br/>
            <input placeholder='Name*' style={{width:"460px",padding:"10px"}}/> <br/><br/>
            <input placeholder='Email*' style={{width:"460px",padding:"10px"}}/> <br/><br/>
            <button style={{padding:"8px",fontWeight:"bold",borderRadius:"5px",backgroundColor:"blue",color:"white"}}>Submit Comment</button>
        </div>
    </div>
  )
}

export default Comment
