import React from 'react';
import Card from './Components/Card';
import Student from './Components/Student';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div >   
      {/* <Card course="B.TECH" name="Yashika" year="3"/>
       <Card course="B.TECH" name="Nandni" year="3"/>
         <Card course="B.TECH" name="Saloni" year="3"/>
           <Card course="B.TECH" name="Riya" year="3"/> */}
        {/* <Student/>
         <br/>
         <Student/>
         <br/>
          <Student/>
          <br/>
           <Student/> */}
           <Header/>
           <MainContent/>
           <Footer/>
           



    </div>
  ) 
}

export default App   
