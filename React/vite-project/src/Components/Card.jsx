import React from 'react'

const Card = (props) => {
  return (
 
     <div style={{
        border: "4px solid green",
        height: "550px",
        width: "550px",    
        margin: "20px auto",  
        borderRadius: "10px",
        padding: "10px",
      }}> 
    <center> 
         <img src="https://www.bing.com/th/id/OIP.oIbNHbNsTZBCzhSyz_K3KAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" style={{height:'20',width:'20'}}/>
         <h4 style={{color:'red'}}>ABES student Card</h4> 
      <h4>{props.course}</h4>
       <h4 >{props.name}</h4>  
       <h4>{props.year} Year</h4>     
    </center>
       
    </div>
     

  )
}

export default Card