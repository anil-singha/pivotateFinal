import React, { Suspense, lazy, useRef } from "react";

import "./scss/style.scss";

import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "./config";
import {
  BrowserRouter,
  HashRouter,
  useLocation,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";

const AppHeader = React.lazy(() => import("./components/AppHeader"));
const AppFooter = React.lazy(() => import("./components/AppFooter"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const Pricing = React.lazy(() => import("./components/Pages/Pricing"));
const privacyPolicy = React.lazy(() =>
  import("./components/Pages/Privacy-policy")
);
const underConstruction = React.lazy(() =>
  import("./components/Pages/Under-construction")
);
const termsAndConditions = React.lazy(() =>
  import("./components/Pages/Terms-and-conditions")
);

const App = () => {
  const childRef = useRef();

  return (
    <React.Suspense
      fallback={
        <section class="hero triangle--teal triangle">
          <div class="container full-width">
            <div class="flex flex-wrap items-center">
              <div class="hero__header">
                <div class="hero__text">
                  <strong>CREATE YOUR </strong>
                </div>
                <h1 class="yellow--text">
                  <div class="word-break">
                    {" "}
                    <strong> CUSTOM </strong> WEB APP{" "}
                  </div>{" "}
                  <div>WITHIN WEEKS...</div>
                </h1>
                <div class="hero__text has--underline">
                  <span>
                    THEN <strong>EASILY</strong> CHANGE IT!
                  </span>
                </div>
                <p>
                  <br />
                  <br />
                  Unlike all other custom web app builders out there, Pivotate
                  allows you to pivot easily as you learn your users’ needs. No
                  more unpredictable freelancers or cookie-cutter templates.
                </p>
                <div class="button__wrapper">
                  <a
                    href="javascript:void(0);"
                    class="button button--rounded button--yellow"
                  >
                    GET STARTED <span class="chevron right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <HashRouter>
        <ScrollToTop>
          <AppHeader ref={childRef} />
          {/* main */}
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <Home
              onSignUp={() => childRef.current.modalHandlerRegistration()}
            />
          </Route>

          <Route
            path={`${process.env.PUBLIC_URL}/pricing`}
            component={Pricing}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/under-construction`}
            component={underConstruction}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/privacy-policy`}
            component={privacyPolicy}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/terms-and-conditions`}
            component={termsAndConditions}
          ></Route>
          <AppFooter
            onSignUp={() => childRef.current.modalHandlerRegistration()}
          />
          {/* main end */}
        </ScrollToTop>
      </HashRouter>
    </React.Suspense>
  );
};

export default App;
