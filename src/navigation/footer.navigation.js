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
                                <a href="./more" className="btn-footer"> More Info </a><br/>
                                <a href="./contact" className="btn-footer"> Contact Us</a><br/>
                                <a href="https://opensource.com/resources/what-open-source"> Open Source</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
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
