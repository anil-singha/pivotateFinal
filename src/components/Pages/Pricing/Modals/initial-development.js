import React from "react";

const initialDevelopment = () => {
  return (
    <>
      <div className="container text-left">
        <h2>
          <span className="headline headline--teal">
            {" "}
            INITIAL DEVELOPMENT DETAILS{" "}
          </span>
        </h2>

        <div className="pricing__content">
          <div className="pricing__description">Initial consultation</div>
          <div className="pricing__price teal--text">
            <strong>FREE</strong>
          </div>
          <p>
            A complimentary personal call, with no commitment, where you discuss
            your goals and we offer options and pricing.
          </p>
        </div>

        <div className="pricing__content">
          <div className="pricing__description">
            Discounted Initial App Package
          </div>
          <div>
            <strong>
              {" "}
              <span className="pricing__price teal--text">$240</span> per user
              type{" "}
            </strong>
          </div>
          <p>
            Includes initial consultation, guided development of the app flow
            and data needs with a developer, logo graphic design of three
            screens with a graphic designer, and final conversion of the app to
            the design. Customized actions not included (see below).
          </p>
        </div>

        <div className="pricing__content">
          <div className="pricing__description">Graphic design</div>
          <div className="flex">
            <div
              className="grow-6"
              style={{ width: "50%", paddingRight: "1em" }}
            >
              <div className="pricing__sub-description">LOGO</div>
              <div className="pricing__price teal--text">
                {" "}
                <strong>$60</strong>{" "}
              </div>
              <p>
                Includes two design options with unlimited revisions.
                <strong> $20 per additional design option </strong>
              </p>
            </div>
            <div className="grow-6" style={{ width: "50%" }}>
              <div className="pricing__sub-description">USER INTERFACE</div>
              <div className="pricing__price inline-flex teal--text">
                {" "}
                <strong>$50</strong>
              </div>
              <strong> Includes up to three standard browser screens. </strong>
            </div>
          </div>
        </div>

        <div className="pricing__content">
          <div className="pricing__description">Development</div>
          <div className="flex">
            <div
              className="grow-6"
              style={{ width: "50%", paddingRight: "1em" }}
            >
              <div>
                <div className="pricing__sub-description">
                  INITIAL UNSTYLED APP DESIGN
                </div>
                <div className="">
                  <strong>
                    {" "}
                    <span className="pricing__price teal--text">$50</span> + 20
                    per extra user type
                  </strong>{" "}
                </div>
              </div>
              <br></br>
              <div>
                <div className="pricing__sub-description">
                  CLOUD CONFIGURATION MODIFICATION
                </div>
                <div className="pricing__price teal--text">
                  <strong> $25</strong>{" "}
                </div>
              </div>
              <br></br>
              <div>
                <div className="pricing__sub-description">
                  CUSTOMIZED ACTION
                </div>
                <div className="">
                  <strong>
                    starting from{" "}
                    <span className="pricing__price teal--text">$30</span>
                  </strong>{" "}
                </div>
              </div>
            </div>
            <div className="grow-6" style={{ width: "50%" }}>
              <div>
                <div className="pricing__sub-description">
                  CONVERSION OF UI DESIGN
                </div>
                <div className="">
                  {" "}
                  <strong className="">
                    <span className="pricing__price teal--text">$100</span>for
                    three screens
                  </strong>{" "}
                </div>
                <br></br>
                <p>
                  excluding animations or other unusual requirements. We will
                  tell you up front if more money is needed.
                </p>
              </div>

              <div>
                <div className="pricing__sub-description">
                  CLOUD CONFIGURATION MODIFICATION
                </div>
                <div className="pricing__price teal--text">
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
