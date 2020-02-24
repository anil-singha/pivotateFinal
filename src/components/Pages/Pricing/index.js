import React, { Component } from "react";
import Modal from "../../Modal";
import InitialDevelopment from "./Modals/initial-development.js";
import ServiceDetails from "./Modals/services-details.js";
import MaintenanceDetails from "./Modals/maintenance-details";
import serviceDetails from "./Modals/services-details.js";

class Pricing extends Component {
  state = {
    modalInitDev: false,
    modalMaintenance: false,
    modalServices: false
  };

  modalToggleInitDev = props => {
    this.setState({
      modalInitDev: !this.state.modalInitDev
    });
  };
  modalToggleMaintenance = props => {
    this.setState({
      modalMaintenance: !this.state.modalMaintenance
    });
  };
  modalToggleServices = props => {
    this.setState({
      modalServices: !this.state.modalServices
    });
  };
  render() {
    return (
      <>
        <section class="pricing__section triangle triangle--teal">
          <div class="container">
            <h1 class="display-2  has--underline"> SERVICES OFFERED </h1>
            <p>
              Pay only for what you need. I need something else. Pricing is
              subject to change
            </p>
          </div>
        </section>
        {/* Initial Development */}
        <section id="initial-development">
          <div class="container">
            <h2 className="text-center">
              <span className="headline headline--teal">
                {" "}
                INITIAL DEVELOPMENT{" "}
              </span>
            </h2>this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
            <div className="subheadline text-center">
              Get it live and test it with real users!
            </div>

            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Initial consultation.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Initial consultation</div>this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">FREE</strong>
                  </div>this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
                  <div>
                    <small>per screen</small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Discounted Initial App Package.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">
                    Discounted Initial App Package
                  </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$240</strong>
                  </div>
                  <div>
                    <small> per user type </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Graphic design.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Graphic design</div>
                  <div class="pricing__price teal--text">this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Development.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Development</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing__detail flex justify-center">
              <a
                href="javascript:void(0);"
                onClick={this.modalToggleInitDev}
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>
          </div>
        </section>
        {/* End Initial Development */}

        {/* Pivotating Services */}
        <section class="pivoting-services  triangle--grey triangle">
          <div class="container">
            <h2 className="text-center">
              <span className="headline headline--teal">
                {" "}
                PIVOTING SERVICES{" "}
              </span>
            </h2>
            <div className="subheadline text-center">
              We don’t leave you after the initial development! You probably
              won’t get it quite right…{" "}
            </div>

            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Graphics.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Graphics</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$15</strong>
                  </div>
                  <div>
                    {" "}
                    <small> per screen </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Content.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Content </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$90</strong>
                  </div>
                </div>
              </div>

              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Special Services.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Special Services</div>
                  <div>
                    <small> starting from </small>
                  </div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$30</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="pricing__detail flex justify-center">
              <a
                onClick={this.modalToggleServices}
                href="javascript:void(0);"
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>
          </div>
        </section>
        {/* End Pivotaing Services */}

        {/* Maintenance */}
        <section id="pivoting-services">
          <div class="container">
            <h2 className="text-center">this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
              <span className="headline headline--teal"> MAINTENANCE </span>
            </h2>
            <div className="subheadline text-center">
              We keep it running smoothly for you
            </div>
            <div class="flex justify-center">
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Basic maintenance.png" />
                </figure>
                <div class="pricing__content">
                  <div class="pricing__description">Basic maintenance</div>
                  <div class="pricing__price teal--text">
                    <strong class="teal--text">$2-$15 </strong>{" "}
                    <small> per screen </small>
                  </div>
                </div>
              </div>
              <div class="grow-3 pricing">
                <figure class="pricing__img">
                  <img src="../images/pricing/Additional Cloud.png" />
                </figure>
                <div class="pricing__content">this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
                  <div class="pricing__description">Additional Cloud</div>this new PR has conflicts with master: https://github.com/YizYah/pivotateFinal/pull/14
                  <div class="pricing__price">
                    <strong class="teal--text">At cost</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing__detail flex justify-center">
              <a
                onClick={this.modalToggleMaintenance}
                href="javascript:void(0);"
                className="button button--rounded button--yellow flex justify-center items-center"
              >
                GET DETAILS{" "}
                <img
                  class="pricing__icon"
                  src="../images/pricing/external link.png"
                ></img>
              </a>
            </div>{" "}
          </div>
        </section>
        {/* End Maintenance */}

        {this.state.modalInitDev && (
          <Modal fullScreen onClose={this.modalToggleInitDev}>
            <InitialDevelopment> </InitialDevelopment>
          </Modal>
        )}
        {this.state.modalMaintenance && (
          <Modal fullScreen onClose={this.modalToggleMaintenance}>
            <MaintenanceDetails> </MaintenanceDetails>
          </Modal>
        )}
        {this.state.modalServices && (
          <Modal fullScreen onClose={this.modalToggleServices}>
            <ServiceDetails> </ServiceDetails>
          </Modal>
        )}
      </>
    );
  }
}


export default Pricing;
