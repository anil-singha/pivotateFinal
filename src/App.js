/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useState } from 'react';
import './scss/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from 'react-router-scroll-top';
import Confirmation from './components/Pages/Confirmation';


const AppFooter = React.lazy(() => import('./components/AppFooter'));
const Home = React.lazy(() => import('./components/Pages/Home'));
const AppHeader = React.lazy(() => import('./components/AppHeader'));
const Staging = React.lazy(() => import('./components/Pages/Staging'));
const Contact = React.lazy(() => import('./components/Pages/Contact'));
const Pricing = React.lazy(() => import('./components/Pages/Pricing'));
const privacyPolicy = React.lazy(() =>
  import('./components/Pages/Privacy-policy')
);
// const confirmation = React.lazy(() => import('./components/Pages/Confirmation'))
const underConstruction = React.lazy(() =>
  import('./components/Pages/Under-construction')
);
const termsAndConditions = React.lazy(() =>
  import('./components/Pages/Terms-and-conditions')
);
const TempVideo = React.lazy(() => import('./components/Pages/Temp-video'));
const Schedule = React.lazy(() => import('./components/Pages/Schedule'));

const App = () => {
  const childRef = useRef();

  return (
    <React.Suspense
      path='/'
      fallback={
        <section className=''>
          <div className='container full-width'>
            <div className='flex flex-wrap items-center'>
              <div className='hero__header'>
                <div className='hero__text'>
                  <strong />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <ScrollToTop>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/confirmation`}>
              <AppHeader noAction />
              <Confirmation />
              <AppFooter noAction />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/tempvideo`}>
              <AppHeader noAction />
              <TempVideo />
              <AppFooter noAction />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/staging`}>
              
                <Staging
                  onSignUp={() => childRef.current.modalHandlerRegistration()}
                />
              
            </Route>

            <Route exact path={`${process.env.PUBLIC_URL}/schedule`}>
              <AppHeader />
              <Schedule />
              <AppFooter noAction />
            </Route>
            <Route
              exact
              path={[
                `${process.env.PUBLIC_URL}/`,
                `${process.env.PUBLIC_URL}/pricing`,
                `${process.env.PUBLIC_URL}/under-construction`,
                `${process.env.PUBLIC_URL}/privacy-policy`,
                `${process.env.PUBLIC_URL}/terms-and-conditions`,
                `${process.env.PUBLIC_URL}/contact`,
                `${process.env.PUBLIC_URL}/schedule`,
                `${process.env.PUBLIC_URL}/meeting-step/create-user-type`,
                `${process.env.PUBLIC_URL}/meeting-step/job-seeker`,
              ]}
            >
              <AppHeader ref={childRef} />
              {/* main */}
              <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <Home
                  onSignUp={() => childRef.current.modalHandlerRegistration()}
                />
              </Route>

              <Route
                exact
                path={`${process.env.PUBLIC_URL}/contact`}
                component={Contact}
              />
              <Route exact path={`${process.env.PUBLIC_URL}/pricing`} />

              <Route
                path={`${process.env.PUBLIC_URL}/pricing`}
                render={(props) => (
                  <Pricing
                    onSignUp={() => childRef.current.modalHandlerRegistration()}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...props}
                  />
                )}
              />

              <Route
                path={`${process.env.PUBLIC_URL}/under-construction`}
                component={underConstruction}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/privacy-policy`}
                component={privacyPolicy}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/terms-and-conditions`}
                component={termsAndConditions}
              />

              <AppFooter
                onSignUp={() => childRef.current.modalHandlerRegistration()}
              />
              {/* main end */}
            </Route>
            <Route component={underConstruction} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
