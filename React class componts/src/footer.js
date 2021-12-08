import { render } from '@testing-library/react';
import './App.css';
import './index.css';
import logo from './logo.svg'
import React, { Component } from "react";


function Footer(){   
    return(
<div class="container mt-3">
  <div class="card">
  <div class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image">
</div>
   <div class="card-body">
      <h4 class="card-title">Ajay krishnan</h4>
     <img src={logo} className="App-logo" alt="logo" />
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <div class="btn btn-primary">See Profile
    </div>
    </div>
  </div>
  </div>
  );
}

export default Footer()