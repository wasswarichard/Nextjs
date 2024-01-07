import React from "react";

const Features = () => {
  return (
    <>
      <section className="analytics ptb-100">
        <div className="container">
          <div className="section-title mt-30">
            <h2>Lystface Features</h2>
          </div>
          <div className="row justift-content-center">
            <div className="col-md-6">
              <div className="single-services ">
                <div className="icon">
                  <img src="/images/lystface-shape/face_detection.png" alt="Face Detection" />
                </div>
                <h3>Face Detection</h3>
                <p>
                  Find out human faces in images with precision. Ex: Is there a
                  human face in this?
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-services">
                <div className="icon">
                  <img src="/images/lystface-shape/face_Identification.png" alt="Face Identification" />
                </div>
                <h3>Face Identification</h3>
                <p>
                  Pinpoint different faces to know who is who. Ex: Who is this?
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-services">
                <div className="icon">
                  <img src="/images/lystface-shape/face_verification.png" alt="Face Verification" />
                </div>
                <h3>Face Verification</h3>
                <p> To find and confirm whose face it is in the picture. Ex: Is this Divya?</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-services">
                <div className="icon">
                  <img src="/images/lystface-shape/face_match.png" alt="Face Match" />
                </div>
                <h3>Face Match</h3>
                <p>
                  To compare and verify the human faces are the same from two
                  input images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
