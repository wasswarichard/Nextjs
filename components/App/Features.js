import React from "react";

const Features = () => {
  return (
    <>
      <section className="features-area app-features ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>How Can We Help You</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-camera"></i>
                </div>
                <h3>Camera Filter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-responsive"></i>
                </div>
                <h3>Fast and optimized</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-hand-drag1"></i>
                </div>
                <h3>Drag and Drop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="features-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-image">
                  <img src="/images/features-img1.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="features-inner-content">
                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-ui-call"></i>
                    </div>
                    <h3>Free Calling Service</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-gift"></i>
                    </div>
                    <h3>Daily Free Gift</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-qr-code"></i>
                    </div>
                    <h3>QR Code Scanner</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images  */}
        <div className="shape7">
          <img src="/images/shape7.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>
        <div className="shape10">
          <img src="/images/shape10.svg" alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src="/images/shape11.svg" alt="shape" />
        </div>
      </section>
    </>
  );
};

export default Features;
