import React from "react";
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

import AuthTabs from "./components/AuthTabs";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Apps from "./components/AppInfo/Apps";

import FormModal from "./components/FormModal";
import FormToggle from "./components/FormToggle";
const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      {/* main */}
      <Route exact path="/" component={Home}></Route>
      <Route path="/pricing" component={Pricing}></Route>
      <AppFooter />
      {/* main end */}
    </BrowserRouter>
  );
};

export default App;
