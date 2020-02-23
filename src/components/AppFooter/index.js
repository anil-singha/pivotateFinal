import React from "react";

const AppFooter = props => (
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
              <img src="images/Pivotate Logo Invert.png" alt="Pivotate Logo" />
            </div>
            <div>
              <ul className="flex external__links">
                <li>
                  {" "}
                  <a href="/under-construction"> FAQs</a>
                </li>
                <li>
                  {" "}
                  <a href="/under-construction"> Blog</a>
                </li>
                <li>
                  {" "}
                  <a href="/under-construction"> Contact</a>
                </li>
              </ul>
            </div>
            <div className="powered-by">
              <span className="grey--text"> Powered By </span>
              <a href="javascript:void(0);" className="teal--text">
                {" "}
                NoStack
              </a>
            </div>
          </div>
          <div className="grow-6 ">
            <div className="flex footer__group-links">
              <div className="grow-4">
                <div className="footer__title">Connect with us</div>
                <ul className="footer__links">
                  <li>
                    {" "}
                    <a href="/under-construction"> Facebook </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/under-construction"> LinkedIn </a>
                  </li>
                </ul>
              </div>
              <div className="grow-4">
                <div className="footer__title">About</div>
                <ul className="footer__links">
                  <li>
                    {" "}
                    <a href="/#about-us"> About Us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/#how-it-works"> How it Works</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/pricing"> Pricing</a>
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
                    <a href="/terms-and-conditions"> Terms of Use</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/privacy-policy"> Privacy</a>
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
