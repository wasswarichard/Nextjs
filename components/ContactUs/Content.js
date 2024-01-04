import React, { Component } from 'react';
import Link from 'next/link';

class Content extends Component {
    render() {
        return (
            <section className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-email"></i>
                                </div>
                                <h3>Mail Here</h3>
                                <p>
                                    <a href="mailto:admin@mojosa.com">admin@mojosa.com</a>
                                </p>
                                <p>
                                    <a href="mailto:info@mojosa.com">info@mojosa.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <h3>Visit Here</h3>
                                <p>1660 Travis Street Miramar, <br /> FL 33025, California</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-phone"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>
                                    <Link href="#">
                                        +123 456 7890
                                    </Link>
                                </p>
                                <p>
                                    <Link href="#">
                                        +241 452 4526
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
