import React from 'react';
//import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (    
       
        <div className='navBar'>
          <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">
        <ul class="nav nav-pills">
            <a class="navbar-brand">
        
      </a>
  <li class="nav-item">
    
    <a class="nav-link active" aria-current="page" href="/">HOME</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="umrah" role="button" aria-expanded="false">UMRAH</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="packages">Packages</a></li>
      <li><a class="dropdown-item" href="ramzan-umrah-packages">Ramzan Umrah Packages</a></li>
      <li><a class="dropdown-item" href="umrah-guide">Umrah Guide</a></li>
      
    </ul>
  </li>
 
  <li class="nav-item"><a class="nav-link" href="hotel">HOTELS</a></li>
 

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="umrah" role="button" aria-expanded="false">VISA</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="visa-consultancy">Visa Consultancy</a></li>
      <li><a class="dropdown-item" href="visa-guide">Visa Guide</a></li>
    </ul>
  </li>
  <li><a class="nav-link" href="bank">BANK DETAILS</a></li>
  <li><a class="nav-link" href="insurance">TRAVEL INSURANCE</a></li>
  <li><a class="nav-link" href="gallery">GALLERY</a></li>
  
  <li><a class="nav-link" href="aboutus">ABOUT US</a></li>
  <li><a class="nav-link" href="contactus">CONTACT US</a></li>
  
</ul>
      </a>
    </nav>
            
        </div>
    )

}

export default Navbar;