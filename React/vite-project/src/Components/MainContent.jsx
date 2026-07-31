import React from 'react'

const MainContent = () => {
  return (
    <center>
      <div>
      <h1>Our Menu</h1>
        <div style={{display:'flex',margin:'50px',justifyContent:'center'}} >
          <div >
             <h1>Pizza</h1>
            <img src="https://tse4.mm.bing.net/th/id/OIP.fNpjyET_K80K1vVjf-672AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" height="250px" width="250px"/>
            <h1>Price</h1>
         </div>
          <div>
          <h1>Burger</h1>
          <img src="https://www.bing.com/th/id/OIP.Fd7uxoh8X3J9eX1oOf78HgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="" height="250px" width="250px"/>
            <h1>Price</h1>
         </div>
          <div >
           <h1>Popcorn</h1>
         <img src="https://www.bing.com/th/id/OIP.2K1xWqMj_gscbFB-vrSt_wHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="" height="250px" width="250px"/>
            <h1>Price</h1>
         </div>
      </div>
      <h1>This Restaurant is good for food</h1>
    </div>
    </center>
  )
}

export default MainContent