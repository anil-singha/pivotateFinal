import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AppFooter = props => (
  <footer className="footer">
    <div className="footer__sign-up  ">
      <div className="container triangle--white triangle">
        <div className="flex">
          <div className="grow-6">
            <h2>
              <div>Don't settle for</div>
              <div>templates or freelancers!</div>
            </h2>
          </div>
          <div className="grow-6 text-center">
            <a
              onClick={props.onSignUp}
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
                src="https://pivotatestaticassets.com/images/Pivotate Logo Invert-min.png"
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
              <strong href="javascript:void(0);" className="teal--text">
                {" "}
                NoStack
              </strong>
            </div>
          </div>
          <div className="grow-6 ">
            <div className="flex footer__group-links">
              <div className="grow-4">
                {/* <div className="footer__title">Connect with us</div> */}
                {/* <ul className="footer__links">
                  <li>
                    {" "}
                    <Link to="/under-construction"> Facebook </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/under-construction"> LinkedIn </Link>
                  </li>
                </ul> */}
              </div>
              <div className="grow-4">
                <div className="footer__title">About</div>
                <ul className="footer__links">
                  <li>
                    {" "}
                    <Link to="/#about-us"> About Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/#how-it-works"> How it Works</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/pricing"> Pricing</Link>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onSignUp}
                      className="teal--text"
                    >
                      Sign Up Now
                    </a>
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
        <div className="text-center copyright">Copyright © 2020 Pivotate</div>
      </div>
    </div>
  </footer>
);

export default AppFooter;
