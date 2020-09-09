import React, { useState, useEffect, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Context as AuthContext } from '../../context/AuthContext';

const AppFooter = (props) => {
  const [displaySignUp, setDisplaySignUp] = useState(false);

  useEffect(() => {
    setDisplaySignUp(localStorage.getItem('accessToken'));
  }, [displaySignUp]);

  return (
    <footer className='footer'>
      {!displaySignUp ? (
        <div className='footer__sign-up  '>
          <div className='container triangle--white triangle'>
            <div className='flex'>
              <div className='grow-6'>
                <h2>
                  <div>Don't settle for</div>
                  <div>templates or freelancers!</div>
                </h2>
                <button
                  type='button'
                  onClick={props.onSignUp}
                  href='#'
                  className='button button--large button--teal'
                >
                  SIGN UP <span className='chevron right' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className='footer__content'>
        <div className='container'>
          <div className='flex'>
            <div className=' grow-6'>
              <div>
                <img
                  height='70'
                  src='https://pivotatestaticassets.com/images/Pivotate Logo_White.svg'
                  alt='Pivotate Logo'
                />
              </div>
              <div>
                <Link to='/contact?s=footer'> Contact</Link>
              </div>
              <div className='powered-by'>
                <span className='grey--text'> Powered By </span>
                <strong href='#' className='teal--text'>
                  {' '}
                  NoStack
                </strong>
              </div>
            </div>
            <div className='grow-6 '>
              <div className='flex footer__group-links'>
                <div className='grow-4' />
                <div className='grow-4'>
                  <div className='footer__title'>About</div>
                  <ul className='footer__links'>
                    <li>
                      <Link to='/#about-us'> About Us</Link>
                    </li>
                    <li>
                      <Link to='/#how-it-works'> How it Works</Link>
                    </li>
                    <li>
                      <Link to='/pricing'> Pricing</Link>
                    </li>
                    <li>
                      {!displaySignUp ? (
                        <strong
                          role='button'
                          style={{ cursor: 'pointer' }}
                          tabIndex={0}
                          aria-hidden='true'
                          href='#'
                          onClick={props.onSignUp}
                          className='teal--text'
                        >
                          Sign Up Now
                        </strong>
                      ) : null}
                    </li>
                  </ul>
                </div>
                <div className='grow-4'>
                  <div className='footer__title'>Terms</div>
                  <ul className='footer__links'>
                    <li>
                      {' '}
                      <Link to='/terms-and-conditions'>Terms of Use</Link>
                    </li>
                    <li>
                      {' '}
                      <Link to='/privacy-policy'>Privacy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center copyright'>Copyright © 2020 Pivotate</div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
