import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
             <div className="nav-bar">
            <h1>Bidding <span>App</span></h1>
            <div className="nav-links">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item navbar-link">
                                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item navbar-link">
                                        <Link to="/productpage" className="nav-link" >Products</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar