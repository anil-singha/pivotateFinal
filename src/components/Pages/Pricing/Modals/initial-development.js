import React from "react";

const initialDevelopment = () => {
  return (
    <>
      <div class="container text-left">
        <h2>
          <span className="headline headline--teal">
            {" "}
            INITIAL DEVELOPMENT DETAILS{" "}
          </span>
        </h2>

        <div class="pricing__content">
          <div class="pricing__description">Initial consultation</div>
          <div class="pricing__price teal--text">
            <strong>FREE</strong>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. I
          </p>
        </div>

        <div class="pricing__content">
          <div class="pricing__description">Discounted Initial App Package</div>
          <div>
            <strong>
              {" "}
              <span class="pricing__price teal--text">$240</span> per user type{" "}
            </strong>
          </div>
          <p>
            Includes initial consultation, guided development of the app flow
            and data needs with a developer, logo graphic design of three
            screens with a graphic designer, and final conversion of the app to
            the design.
          </p>
        </div>

        <div class="pricing__content">
          <div class="pricing__description">Graphic design</div>
          <div class="flex">
            <div class="grow-6" style={{ width: "50%" }}>
              <div class="pricing__sub-description">LOGO</div>
              <div class="pricing__price teal--text">
                {" "}
                <strong>$60</strong>{" "}
              </div>
              <p>
                Includes two design options with unlimited revisions.
                <strong> $20 per additional design option </strong>
              </p>
            </div>
            <div class="grow-6" style={{ width: "50%" }}>
              <div class="pricing__sub-description">USER INTERFACE</div>
              <div class="pricing__price inline-flex teal--text">
                {" "}
                <strong>$50</strong>
              </div>
              <strong> for three screens </strong>
            </div>
          </div>
        </div>

        <div class="pricing__content">
          <div class="pricing__description">Development</div>
          <div class="flex">
            <div class="grow-6" style={{ width: "50%" }}>
              <div>
                <div class="pricing__sub-description">
                  INITIAL UNSTYLED APP DESIGN
                </div>
                <div class="">
                  <strong>
                    {" "}
                    <span class="pricing__price teal--text">$50</span> + 20 per
                    user type
                  </strong>{" "}
                </div>
              </div>
              <br></br>
              <div>
                <div class="pricing__sub-description">
                  CLOUD CONFIGURATION MODIFICATION
                </div>
                <div class="pricing__price teal--text">
                  <strong> $25</strong>{" "}
                </div>
              </div>
              <br></br>
              <div>
                <div class="pricing__sub-description">CUSTOMIZED ACTION</div>
                <div class="">
                  <strong>
                    starting from{" "}
                    <span class="pricing__price teal--text">$30</span>
                  </strong>{" "}
                </div>
              </div>
            </div>
            <div class="grow-6" style={{ width: "50%" }}>
              <div>
                <div class="pricing__sub-description">
                  CONVERSION OF UI DESIGN
                </div>
                <div class="">
                  {" "}
                  <strong class="">
                    <span class="pricing__price teal--text">$100</span>for three
                    screens
                  </strong>{" "}
                </div>
                <br></br>
                <p>
                  excluding animations or other unusual requirements. We will
                  tell you up front if more money is needed. (Or you can work
                  out a direct private deal with your developer.)
                </p>
              </div>

              <div>
                <div class="pricing__sub-description">
                  CLOUD CONFIGURATION MODIFICATION
                </div>
                <div class="pricing__price teal--text">
                  {" "}
                  <strong>At cost</strong>{" "}
                </div>
                <p>(besides the one-time configuration fee above)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default initialDevelopment;
