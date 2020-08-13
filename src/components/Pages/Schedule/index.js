import React, { Component } from 'react';

class Schedule extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render() {
    return (
      <div>
        <div className="schedule__img">
          <div className="schedule__content">
            <h2> We would like to meet you! </h2>
            <p>
              A friendly, no-commitment discussion of what you need in an app so
              we can help you get clarity, even if you don't build with us!
            </p>
          </div>
        </div>

        <div id="schedule_form">
          <div
            data-url="https://calendly.com/pivotate/clarify-new-app?hide_event_type_details=1&primary_color=16abbc
        "
            className="calendly-inline-widget"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    );
  }
}

export default Schedule;
