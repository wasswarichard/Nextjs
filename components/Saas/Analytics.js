import Link from "next/link";
import React from "react";

const Analytics = () => {
    return (
        <div className="d-table analytics">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="hero-content pl-4">
                                    <h1>
                                       Automatic data insights
                                    </h1>
                                    <p>
                                        An exceptional attendance API source has emerged as a successful software
                                        in the attendance field. Lystface API has made a significant play in
                                        automating attendance systems based on face recognition and recording
                                        data insights with zero error.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div >
                                    <img
                                        src="/images/lystface-shape/data_insight.png"
                                        alt="data insights"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Analytics;
