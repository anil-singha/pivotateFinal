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
  Switch,
  withRouter
} from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";
import Confirmation from "./components/Pages/Confirmation";

const AppHeader = React.lazy(() => import("./components/AppHeader"));
const AppFooter = React.lazy(() => import("./components/AppFooter"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const Pricing = React.lazy(() => import("./components/Pages/Pricing"));
const privacyPolicy = React.lazy(() =>
  import("./components/Pages/Privacy-policy")
);
const confirmation = React.lazy(() =>
  import("./components/Pages/Confirmation")
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
      path="/"
      fallback={
        <section className="">
          <div className="container full-width">
            <div className="flex flex-wrap items-center">
              <div className="hero__header">
                <div className="hero__text">
                  <strong></strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={[
                "/privacy-policy",
                "/pricing",
                "/",
                "terms-and-conditions"
              ]}
            >
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
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/confirmation`}>
              <AppHeader noAction />
              <Confirmation></Confirmation>
              <AppFooter noAction />
            </Route>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    </React.Suspense>
  );
};

export default App;
