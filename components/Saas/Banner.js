import React from "react";
import Link from "next/link";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

class Banner extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    return (
      <>
        <div className="main-banner saas-home">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="hero-content pl-4">
                      <h1>
                        Recognize Faces Your
                        Way: Tailored
                        Recognition Solutions
                      </h1>
                      <p>
                       Elevate your platform's capabilities using our precision facial
                        recognition technology(API?) Seamlessly integrate Lystface API
                        for swift and secure user verification - experiencing the power
                        of seamless identification, efficiency and reliability.
                      </p>
                      <ul>
                        <li>Cutting Edge AI Technology</li>
                        <li>Versatile Scalability</li>
                      </ul>

                      <Link href="/contact" className="btn btn-primary">
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div >
                      <img
                          src="/images/lystface-shape/solutions.png"
                          // className="wow fadeInDown"
                          // data-wow-delay="0.6s"
                          alt="monitor"
                      />
                      {/*<img*/}
                      {/*  src="/images/lystface-shape/monitor.png"*/}
                      {/*  className="wow fadeInDown"*/}
                      {/*  data-wow-delay="0.6s"*/}
                      {/*  alt="monitor"*/}
                      {/*/>*/}
                      {/*<img*/}
                      {/*    src="/images/lystface-shape/profile.png"*/}
                      {/*    className="wow fadeInLeft"*/}
                      {/*    data-wow-delay="0.6s"*/}
                      {/*    alt="profile"*/}
                      {/*/>*/}
                      {/*<img*/}
                      {/*    src="/images/lystface-shape/search.png"*/}
                      {/*    className="wow fadeInDown"*/}
                      {/*    data-wow-delay="0.6s"*/}
                      {/*    alt="search"*/}
                      {/*/>*/}
                      {/*<img*/}
                      {/*    src="/images/lystface-shape/security.png"*/}
                      {/*    className="wow fadeInDown"*/}
                      {/*    data-wow-delay="0.6s"*/}
                      {/*    alt="security"*/}
                      {/*/>*/}
                      {/*<img*/}
                      {/*    src="/images/lystface-shape/locked.png"*/}
                      {/*    className="wow fadeInDown"*/}
                      {/*    data-wow-delay="0.6s"*/}
                      {/*    alt="locked"*/}
                      {/*/>*/}
                      {/*<img*/}
                      {/*    src="/images/lystface-shape/check.png"*/}
                      {/*    className="wow fadeInDown"*/}
                      {/*    data-wow-delay="0.6s"*/}
                      {/*    alt="check"*/}
                      {/*/>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
