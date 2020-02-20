import React, { Component } from "react";

import { LogoutButton } from "@nostack/no-stack";
import RegistrationForm from "../../components/RegistrationForm";
import LoginForm from "../../components/LoginForm";
import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "../../config";

class NavBar extends Component {
  state = {
    modalRegistration: this.props.modalRegistration,
    modalLogin: false
  };

  // Events
  modalHandlerRegistration = () => {
    this.setState({
      modalRegistration: !this.state.modalRegistration
    });
  };

  modalHandlerLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  };

  modalHandlerSwitchForm = () => {
    this.modalHandlerRegistration();
    this.modalHandlerLogin();
  };

  render() {
    return (
      <header className="container header flex items-center">
        <div className="header__logo">
          <a href="/">
            <img src="images/Pivotate Logo.png" alt="Pivotate Logo" />
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
              <a href="/pricing">PRICING</a>
            </li>
            <li>
              <a href="#">HOW IT WORKS </a>
            </li>
            <li>
              <a href="#">ABOUT US </a>
            </li>
          </ul>
        </nav>
        <div className="grow-12 text-right hide-tablet">
          <a onClick={this.modalHandlerLogin}> LOGIN </a>
          <LogoutButton />
          <a
            onClick={this.modalHandlerRegistration}
            className="button button--yellow button__sign-up"
          >
            SIGN UP
          </a>
        </div>
        <div className="show-tablet">
          <div id="amp-burger">
            <div className="lines">
              <input type="checkbox" className="checkbox" />
              <div className="lines-icon" data-menu="">
                <div className="icon-left"></div>
                <div className="icon-right"></div>
              </div>
              <div className="mobile-menu__wrapper">
                <ul>
                  <li>
                    <a href="/pricing">PRICING</a>
                  </li>
                  <li>
                    <a href="#">HOW IT WORKS </a>
                  </li>
                  <li>
                    <a href="#">ABOUT US </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={this.modalHandlerLogin}
                    >
                      {" "}
                      LOGIN{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dialogs.html"
                      className="button button--yellow button__sign-up"
                    >
                      FREE CONSULTATION
                    </a>
                  </li>
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
