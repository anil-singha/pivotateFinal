import React from "react";

const maintenanceDetails = () => {
  return (
    <>
      <div class="container text-left">
        <h2>
          <span className="headline headline--teal"> MAINTENANCE DETAILS </span>
        </h2>

        <div class="pricing__content">
          <div class="pricing__description">Basic maintenance</div>
          <div class="flex">
            <div>
              <div class="pricing__sub-description">ADDING NEW BUTTON</div>
              <div class="">
                {" "}
                <strong class="">
                  {" "}
                  <span class="pricing__price teal--text">$20 </span>/month
                </strong>{" "}
              </div>
              <p>
                (includes server and cloud storage/computation costs until they
                exceed a cutoff. Also includes a static front end endpoint,
                which could be used either for a landing page or for a web app)
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="flex">
            <div>
              <div class="pricing__description">
                Special cloud storage/computation needs
              </div>
              <div class="">
                {" "}
                <strong class="">
                  {" "}
                  <span class="pricing__price teal--text">At cost </span>
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
