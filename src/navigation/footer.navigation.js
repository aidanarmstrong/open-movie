import React from "react";

const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                        <h1>Open Movie</h1>
                                        <p>The open source streaming platform.</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> About Us</h6>
                                <p>For people by people. Build up a community, not bills.</p>
                                <a href="#" className="btn-footer"> More Info </a><br/>
                                <a href="#" className="btn-footer"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Help us</h6>
                                <div className="row ">
                                    <div className="col-md-3">
                                        <ul>
                                            <li><a href="#"> Home</a></li>
                                            <li><a href="#"> About</a></li>
                                            <li><a href="#"> OS</a></li>
                                            <li><a href="#"> Help</a></li>
                                            <li><a href="#"> Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="social">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"/></a>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"/></a>
                                </div>
                                <p>Version 0.0.1 beta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
