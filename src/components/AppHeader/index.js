import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { NoStackConsumer } from "@nostack/no-stack";
import { LogoutButton } from "@nostack/no-stack";
import RegistrationForm from "../../components/RegistrationForm";
import LoginForm from "../../components/LoginForm";
import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "../../config";

class NavBar extends Component {
  state = {
    modalRegistration: this.props.modalRegistration,
    modalLogin: false,
    checkbox: false,
  };
  howItWorks = () => {
    var elmnt = document.getElementById("how-it-works");
    setTimeout(() => {
      elmnt.scrollIntoView();
    }, 100);
    return <Redirect to="/" push={true} />;
  };
  about = () => {
    var elmnt = document.getElementById("about");
    setTimeout(() => {
      elmnt.scrollIntoView();
    }, 100);
    return <Redirect to="/" push={true} />;
  };

  // Events
  modalHandlerRegistration = () => {
    this.setState({
      modalRegistration: !this.state.modalRegistration,
    });
  };

  modalHandlerLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };

  modalHandlerSwitchForm = () => {
    this.modalHandlerRegistration();
    this.modalHandlerLogin();
  };
  checkboxHandler = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  render() {
    return (
      <header className="container header flex items-center">
        <div className="header__logo">
          <a href="/">
            <img
              src="https://pivotatestaticassets.com/images/Pivotate Logo.svg"
              alt="Pivotate Logo"
              width="170"
            />
          </a>
        </div>
        {this.state.modalRegistration && (
          <RegistrationForm
            platformId={PLATFORM_ID}
            userClassId={TYPE_CUSTOMER_ID}
            onSwitch={this.modalHandlerSwitchForm}
            onClose={this.modalHandlerRegistration}
          />
        )}
        {this.state.modalLogin && (
          <LoginForm
            onSwitch={this.modalHandlerSwitchForm}
            onClose={this.modalHandlerLogin}
          />
        )}
        <nav className="hide-tablet">
          <ul className="flex header__nav">
            <li>
              <Link to="/pricing?=initial"> &nbsp; PRICING </Link>
            </li>
            <li>
              <Link to="/#how-it-works"> HOW IT WORKS </Link>
            </li>
            <li>
              <Link to="/#about-us"> ABOUT US </Link>
            </li>
            <li>
              <Link to="/contact"> CONTACT </Link>
            </li>
          </ul>
        </nav>

        {!this.props.noAction && (
          <div className="grow-12 text-right hide-tablet">
            <NoStackConsumer>
              {({ loading, currentUser }) => {
                if (loading) return null;

                if (!currentUser) {
                  return (
                    <div>
                      <a onClick={this.modalHandlerLogin}> LOGIN </a>
                      <a
                        onClick={this.modalHandlerRegistration}
                        className="button button--yellow button__sign-up"
                      >
                        SIGN UP
                      </a>
                    </div>
                  );
                } else {
                  return (
                    <div className="logout">
                      <LogoutButton></LogoutButton>
                    </div>
                  );
                }
              }}
            </NoStackConsumer>
          </div>
        )}
        <div className="show-tablet">
          <div id="amp-burger" onClick={this.checkboxHandler}>
            <div className="lines">
              <input
                type="checkbox"
                // checked={this.state.checkbox}
                id="checkbox"
                className="checkbox"
              />
              <div className="lines-icon" data-menu="">
                <div className="icon-left"></div>
                <div className="icon-right"></div>
              </div>
              <div className="mobile-menu__wrapper">
                <ul>
                  <li>
                    <Link to="/pricing?inital">PRICING</Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to="/#how-it-works">
                      HOW IT WORKS{" "}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to="/#about-us">
                      ABOUT US{" "}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to="/contact">
                      CONTACT
                    </Link>
                  </li>
                  {!this.props.noAction && (
                    <li>
                      <a href="#" onClick={this.modalHandlerLogin}>
                        {" "}
                        LOGIN{" "}
                      </a>
                    </li>
                  )}
                  {!this.props.noAction && (
                    <li>
                      <a
                        href="#"
                        onClick={this.modalHandlerRegistration}
                        className="button button--yellow button__sign-up"
                      >
                        FREE CONSULTATION
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
