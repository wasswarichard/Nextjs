import React from "react";

const Solutions = () => {
    return (
        <>
            <section className="features-area saas-features ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Solutions</h2>
                    </div>

                    <div className="row justift-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div >
                                    <img src="/images/lystface-shape/facial_recognition.png" alt="precise facial recognition" />
                                </div>
                                <h3>Precise Facial Recognition</h3>
                                <p>
                                   Immerse your platform in the world of
                                    precise facial identification technology.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div >
                                    <img src="/images/lystface-shape/realtime_efficiency.png" alt="Real-time Effeciency" />
                                </div>
                                <h3>Real-Time Efficiency</h3>
                                <p>
                                    Elevate user experiences with swift,
                                    real-time face verification.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div >
                                    <img src="/images/lystface-shape/seamless_integration.png" alt="Seamless integration" />
                                </div>
                                <h3>Seamless Integration</h3>
                                <p>
                                   Seamlessly integrate Lystface API into
                                    your ecosystem for enhanced security and convenience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Solutions;
