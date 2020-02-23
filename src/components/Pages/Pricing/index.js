import React from "react";

const Pricing = () => {
  return (
    <section>
      <div>
        <h2 className="text-center">
          <span className="headline headline--teal"> Service Offered </span>
        </h2>
        <p>
          Pay only for what you need. I need something else. Pricing is subject
          to change
        </p>
      </div>

      <div>
        <div class="container">
          <h2 className="text-center">
            <span className="headline headline--teal">
              {" "}
              Initial Development{" "}
            </span>
          </h2>
          <p>Get it live and test it with real users!</p>
        </div>

        <div class="flex justify-center">
          <div class="pricing">
            <figure>
              <img src="http://placehold.it/75" />
            </figure>
            <div>
              <div> Initial consultation </div>
              <div> FREE </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
