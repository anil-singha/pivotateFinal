import React from "react";

const maintenanceDetails = () => {
  return (
    <>
      <div className="container text-left">
        <h2>
          <span className="headline headline--teal"> MAINTENANCE DETAILS </span>
        </h2>

        <div className="pricing__content">
          <div className="pricing__description">Basic maintenance</div>
          <div className="flex">
            <div>
              <div className="">
                {" "}
                <strong className="">
                  {" "}
                  <span className="pricing__price teal--text">$45 </span>/month
                </strong>{" "}
              </div>
              <p>
                Includes server and cloud storage/computation costs until they
                exceed a cutoff. Also includes a static front end endpoint,
                which could be used either for a landing page or for a web app.
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="flex">
            <div>
              <div className="pricing__description">
                Special cloud storage/computation needs
              </div>
              <div className="">
                {" "}
                <strong className="">
                  {" "}
                  <span className="pricing__price teal--text">At cost </span>
                </strong>{" "}
              </div>
              <p>
                In other words, we don’t charge you more than we need to pay
                ourselves!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default maintenanceDetails;
