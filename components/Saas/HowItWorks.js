import React from "react";

const HowItWorks = () => {
    return (
        <section className="solutions ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>How it Works?</h2>
                </div>

                <div className="row justift-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div >
                                <img src="/images/lystface-shape/embed_api.png" alt="Embed Our API" />
                            </div>
                            <h2>Embed Our API</h2>
                            <p>
                               Integrate Lystface API effortlessly into
                                your platform.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div >
                                <img src="/images/lystface-shape/real_time_scanning.png" alt="Real-Time Scanning" />
                            </div>
                            <h2>Real-Time Scanning</h2>
                            <p>
                               Witness faces being scanned in real-
                                time with accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-features">
                            <div >
                                <img src="/images/lystface-shape/instant_verification.png" alt="Instant Verification" />
                            </div>
                            <h3>Instant Verification</h3>
                            <p>
                                Experience swift and precise
                                verification results at your fingertips.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default HowItWorks;
