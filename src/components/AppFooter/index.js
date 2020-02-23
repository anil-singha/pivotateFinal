import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class AppFooter extends Component {
  howItWorks = () => {
    var elmnt = document.getElementById("how-it-works");
    setTimeout(() => {
      if (elmnt) elmnt.scrollIntoView();
    }, 100);
    return <Redirect to="/" push={true} />;
  };
  about = () => {
    var elmnt = document.getElementById("about-us");
    setTimeout(() => {
      if (elmnt) elmnt.scrollIntoView();
    }, 100);
    return <Redirect to="/" push={true} />;
  };

  render() {
    return (
      <footer className="footer">
        <div className="footer__sign-up  ">
          <div className="container triangle--white triangle">
            <div className="flex">
              <div className="grow-6">
                <h2>
                  <div>Don't settle with</div>
                  <div>templates or freelancers!</div>
                </h2>
              </div>
              <div className="grow-6 text-center">
                <a
                  onClick={this.props.onSignUp}
                  href="javascript:void(0);"
                  className="button button--large button--teal"
                >
                  SIGN UP <span className="chevron right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content">
          <div className="container">
            <div className="flex">
              <div className=" grow-6">
                <div>
                  <img
                    src="images/Pivotate Logo Invert.png"
                    alt="Pivotate Logo"
                  />
                </div>
                <div>
                  <ul className="flex external__links">
                    <li>
                      {" "}
                      <Link to="/under-construction"> FAQs</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/under-construction"> Blog</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/under-construction"> Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="powered-by">
                  <span className="grey--text"> Powered By </span>
                  <Link to="javascript:void(0);" className="teal--text">
                    {" "}
                    NoStack
                  </Link>
                </div>
              </div>
              <div className="grow-6 ">
                <div className="flex footer__group-links">
                  <div className="grow-4">
                    <div className="footer__title">Connect with us</div>
                    <ul className="footer__links">
                      <li>
                        {" "}
                        <Link to="/under-construction"> Facebook </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/under-construction"> LinkedIn </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="grow-4">
                    <div className="footer__title">About</div>
                    <ul className="footer__links">
                      <li>
                        {" "}
                        <a href="/#" onClick={this.about}>
                          {" "}
                          About Us
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/#" onClick={this.howItWorks}>
                          {" "}
                          How it Works
                        </a>
                      </li>
                      <li>
                        {" "}
                        <Link to="/pricing"> Pricing</Link>
                      </li>
                      <li>
                        <Link
                          to="javascript:void(0);"
                          onClick={this.props.onSignUp}
                          className="teal--text"
                        >
                          Sign Up Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="grow-4">
                    <div className="footer__title">Terms</div>
                    <ul className="footer__links">
                      <li>
                        {" "}
                        <Link to="/terms-and-conditions"> Terms of Use</Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/privacy-policy"> Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center copyright">
              Copyright © 2020 Pivotate
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
