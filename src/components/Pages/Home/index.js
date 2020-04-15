import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <main role="main">
      {/* hero */}
      <section className="hero triangle--teal triangle">
        <div className="container full-width">
          <div className="flex flex-wrap items-center">
            <div className="hero__header">
              <div className="hero__text">
                <strong>CREATE YOUR </strong>
              </div>
              <h1 className="yellow--text">
                <div className="word-break">
                  {" "}
                  <strong> CUSTOM </strong> WEB APP{" "}
                </div>{" "}
                <div>WITHIN WEEKS...</div>
              </h1>
              <div className="hero__text has--underline">
                <span>
                  THEN <strong>EASILY</strong> CHANGE IT!
                </span>
              </div>
              <p>
                Unlike all other custom web app builders out there, Pivotate
                allows you to pivot easily as you learn your users’ needs. No
                more unpredictable freelancers or cookie-cutter templates.
              </p>
              <div className="button__wrapper">
                <a
                  onClick={props.onSignUp}
                  href="javascript:void(0);"
                  className="button button--rounded button--yellow"
                >
                  GET STARTED <span className="chevron right"></span>
                </a>
              </div>
            </div>

            <img
              className="hero__img"
              src="https://pivotatestaticassets.com/images/Pivotate Hero-min.png"
              alt="Pivotate Hero"
            />
          </div>
        </div>
      </section>
      {/* hero end */}

      {/* about */}
      <section className="about" id="about-us">
        <h2 className="text-center">
          <span className="headline headline--teal"> ABOUT PIVOTATE</span>
        </h2>
        <div className="container">
          <div className="flex items-center">
            <img
              src="https://pivotatestaticassets.com/images/About Pivotate-min.png"
              className="about__img"
              alt="About Pivotate"
            />
            <p className="about__text">
              Outsourcing your app to freelancers leads to huge headaches, and
              burns all of your cash when you start to pivot.
              <br />
              <br />
              Pivotate offers a more natural approach than freelancer sites and
              outsourcing companies. We maintain a very flexible version of your
              app. You can work in small, inexpensive steps.
              <br />
              <br />
              See what your market really wants, and pivot as needed!
            </p>
          </div>
        </div>
      </section>
      {/* end about */}

      {/* how it works */}
      <section
        className="how-it-works  triangle--grey triangle"
        id="how-it-works"
      >
        <h2 className="text-center">
          <span className="headline headline--teal"> HOW IT WORKS </span>
        </h2>
        <div className="subheadline text-center">
          Pay a small monthly fee, but pivot with ease!
        </div>
        <div className="container">
          <div
            id="how-it-works__img"
            className="how-it-works__img"
            alt="How It Works"
          />
        </div>
      </section>
      {/* how it works end */}

      {/* why it works */}
      <section className="why-it-works">
        <div className="flex flex-column ">
          <h2 className="text-center">
            <span className="headline headline--yellow">WHY IT WORKS</span>
          </h2>
          <div className="container full-width flex flex-wrap  items-center">
            <p className="why-it-works__text">
              Our framework makes coding simpler and easier. The developer just
              works on the user interface.
            </p>
            <img
              className="why-it-works__img"
              src="https://pivotatestaticassets.com/images/Why It Works-min.png"
              alt="Why It Works"
            />
          </div>
        </div>
      </section>
      {/* why it works end */}

      <section className="pricing">
        <h2 className="text-center">
          <span className="headline headline--yellow">PRICING</span>
        </h2>
        <div className="subheadline text-center">
          Hosting (Server): $20/month.
          <div>
            Low fees for changes (see
            <Link to="/pricing" className="teal--text">
              &nbsp; price list &nbsp;
            </Link>
            for precise details):
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="grow-3">
              <div className="card">
                <div className="card__title">Minimal App</div>
                <div className="card__price">$200</div>
              </div>
            </div>
            <div className="grow-3">
              <div className="card">
                <div className="card__title">Landing Page + App</div>
                <div className="card__price">$380</div>
              </div>
            </div>
            <div className="grow-3">
              <div className="card">
                <div className="card__title">Standard Pivot</div>
                <div className="card__price">$5-100</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
