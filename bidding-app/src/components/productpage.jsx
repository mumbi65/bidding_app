import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import kilimanjaro from "../assets/kilimanjaro.jpg"
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const ProductPage = () => {
    

    return (
        <>
        <Navbar/>
        <div className="row justify-content-around product-package-container">
        <div className="card col-md-3 product-package-card" >
            <img src={kilimanjaro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mascara</h5>
              <p>100 Ksh</p>
              <p className="card-text">mascara</p>
              <Link to="#"  className="btn btn-outline-success">Start Bidding</Link>
            </div>
          </div>
          <div className="card col-md-3 product-package-card" >
            <img src={kilimanjaro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mascara</h5>
              <p>100 Ksh</p>
              <p className="card-text">mascara</p>
              <Link to="#"  className="btn btn-outline-success">Start Bidding</Link>
            </div>
          </div>
          <div className="card col-md-3 product-package-card" >
            <img src={kilimanjaro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mascara</h5>
              <p>100 Ksh</p>
              <p className="card-text">mascara</p>
              <Link to="#"  className="btn btn-outline-success">Start Bidding</Link>
            </div>
          </div>
          
        </div>
        </>
    );
};

export default ProductPage;
