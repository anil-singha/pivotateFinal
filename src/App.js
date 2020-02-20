import React, {
  Component,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";
import styled from "styled-components";
import "./App.min.css";
import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "./config";
import { BrowserRouter, Route } from "react-router-dom";

// Default Layout
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

// Pages
import Home from "./components/Pages/Home";
import Pricing from "./components/Pages/Pricing";
import privacyPolicy from "./components/Pages/Privacy-policy";
import underConstruction from "./components/Pages/Under-construction";
import termsAndCondition from "./components/Pages/Terms-and-condition";

const App = () => {
  const childRef = useRef();

  return (
    <BrowserRouter>
      <AppHeader ref={childRef} />
      {/* main */}
      <Route path="/">
        <Home onSignUp={() => childRef.current.modalHandlerRegistration()} />
      </Route>

      <Route path="/pricing" component={Pricing}></Route>
      <Route path="/under-construction" component={underConstruction}></Route>
      <Route path="/privacy-policy" component={privacyPolicy}></Route>
      <Route path="/terms-and-condition" component={termsAndCondition}></Route>
      <AppFooter onSignUp={() => childRef.current.modalHandlerRegistration()} />
      {/* main end */}
    </BrowserRouter>
  );
};

export default App;
