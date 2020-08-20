import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
  state = {
    active: false,
  };
  render() {
    let vm = this;
    function sendEmail(e) {
      e.preventDefault();
      emailjs
        .sendForm(
          "mailgun",
          "template_qoPOGXNS",
          e.target,
          "user_PVCtRCUc6W81aPgHxjTXj"
        )
        .then(
          (result) => {
            vm.setState({
              active: !vm.state.active,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    return (
      <div
        className="container full-width-sm"
        style={{ marginBottom: "124px", marginTop: "100px" }}
      >
        <div className="row">
          <div className="contact__wrap text-center">
            <form
              disabled
              className="contact__form"
              onSubmit={sendEmail}
              style={{ lineHeight: "1.5" }}
            >
              <div>
                <h3 className="headline" style={{ marginBottom: "0" }}>
                  Get in touch with the <br /> Pivotate Team!
                </h3>
                <p
                  style={{
                    color: "#777",
                    marginBottom: "2em",
                  }}
                >
                  We're here to help you with any questions you may have.
                </p>
              </div>

              {this.state.active && (
                <div>
                  <hr />
                  Thank you for your message. Our Customer Success Team will get
                  back to you as soon as possible.
                </div>
              )}
              {!this.state.active && (
                <div>
                  <input
                    required
                    className="contact__input"
                    placeholder="Name..."
                    type="text"
                    name="name"
                  />
                  <input
                    required
                    className="contact__input"
                    placeholder="Email..."
                    type="email"
                    name="from_email"
                  />
                  <textarea
                    required
                    placeholder="Message..."
                    row="5"
                    className="contact__input"
                    name="message"
                  ></textarea>
                  <input
                    type="submit"
                    className="button button--rounded button--yellow"
                    value="SEND IT"
                    style={{
                      width: "100%",
                      minHeight: " 50px",
                      fontWeight: "600",
                      fontSize: "1em",
                    }}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
