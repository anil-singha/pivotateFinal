import React, {
  Component,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";
// import 'scss/index.scss'; // assuming a styles directory under src/

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

// Default Layout
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

// Pages
import Home from "./components/Pages/Home";
import Pricing from "./components/Pages/Pricing";
import privacyPolicy from "./components/Pages/Privacy-policy";
import underConstruction from "./components/Pages/Under-construction";
import termsAndConditions from "./components/Pages/Terms-and-conditions";
import ScrollToTop from 'react-router-scroll-top'



const App = () => {
  const childRef = useRef();
  return (
    <HashRouter>
      <ScrollToTop>
        <AppHeader ref={childRef} />
        {/* main */}
        <Route path={`${process.env.PUBLIC_URL}/`} exact>
          <Home onSignUp={() => childRef.current.modalHandlerRegistration()} />
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
        <AppFooter onSignUp={() => childRef.current.modalHandlerRegistration()} />
        {/* main end */}
      </ScrollToTop>
    </HashRouter>
  );
};

export default App;
