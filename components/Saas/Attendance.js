import React from "react";

const Attendance = () => {
    return (
        <div className="d-table analytics">
            <div className="d-table-cell">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="hero-content pl-4">
                                <h1>
                                   Touchless attendance system
                                </h1>
                                <p>
                                    --"Just smile to mark your attendance"
                                    <br/>
                                    Use our best face recognition API to make your business grow higher. You
                                    don't want to spend on a separate device for this integration. Our API
                                    consistently integrates with any existing device to mark facial attendance.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div >
                                <img
                                    src="/images/lystface-shape/touchless_attendance.png"
                                    alt="touchless attendance"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Attendance;
