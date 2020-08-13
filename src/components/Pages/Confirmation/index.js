import React from 'react';

const Confirmation = () => {
  return (
    <div className="text-center container full-width">
      <div
        style={{
          margin: 'auto',
          marginTop: '100px',
          maxWidth: '769px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          marginBottom: '100px',
        }}
      >
        <img
          style={{ width: '100%' }}
          src="https://pivotatestaticassets.com/images/Banner.jpg"
        />
        <p style={{ textAlign: 'center' }}>
          <br />
          <br />
          <h3 className="c0">
            Your Meeting is Confirmed! We’ll be talking soon.
          </h3>
          <h4>Check your email for details.</h4>
        </p>
      </div>
      <br />
    </div>
  );
};

export default Confirmation;
