import React from "react";

const Employees = () => {
    return (
        <div className="main-banner">
            <div className="d-table employees">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div >
                                    <img
                                        src="/images/lystface-shape/employees.png"
                                        alt="data insights"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="hero-content pl-4">
                                    <h1>
                                        Boon for employees
                                    </h1>
                                    <p>
                                      --"Start your day with a smile - you made today's attendance"
                                        <br/> <br/>
                                        Employees can check in and check-out seamlessly, eliminating the need for
                                        complex procedures. This not only benefits employers but also enhances
                                        the overall experience for employees. No need to worry about your
                                        attendance marking when LYstface API is in your ogranization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Employees;
