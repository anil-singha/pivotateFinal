import React from "react";

const AppFooter = () => (
  <footer class="footer">
    <div class="footer__sign-up  ">
      <div class="container triangle--white triangle">
        <div class="flex">
          <div class="grow-6">
            <h2>
              <div>Don't settle with</div>
              <div>templates or freelancers!</div>
            </h2>
          </div>
          <div class="grow-6 text-center">
            <a href="/dialogs.html" class="button button--large button--teal">
              SIGN UP <span class="chevron right"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__content">
      <div class="container">
        <div class="flex">
          <div class=" grow-6">
            <div>
              <img src="images/Pivotate Logo Invert.png" alt="Pivotate Logo" />
            </div>
            <div>
              <ul class="flex external__links">
                <li>FAQs</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div class="powered-by">
              <span class="grey--text"> Powered By </span>
              <a href="#" class="teal--text">
                {" "}
                NoStack
              </a>
            </div>
          </div>
          <div class="grow-6 ">
            <div class="flex footer__group-links">
              <div class="grow-4">
                <div class="footer__title">Connect with us</div>
                <ul class="footer__links">
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
              <div class="grow-4">
                <div class="footer__title">About</div>
                <ul class="footer__links">
                  <li>About Us</li>
                  <li>How it Works</li>
                  <li>Pricing</li>
                  <li>
                    <a href="/dialogs.html" class="teal--text">
                      Sign Up Now
                    </a>
                  </li>
                </ul>
              </div>
              <div class="grow-4">
                <div class="footer__title">Terms</div>
                <ul class="footer__links">
                  <li>Terms of Use</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center copyright">Copyright © 2020 Pivotate</div>
      </div>
    </div>
  </footer>
);

export default AppFooter;
