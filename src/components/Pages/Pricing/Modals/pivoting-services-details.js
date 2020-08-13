import React from 'react';

const serviceDetails = () => {
  return (
    <>
      <div className='container text-left'>
        <h2>
          <span className='headline headline--teal'>
            {' '}
            PIVOTING SERVICES DETAILS
          </span>
        </h2>

        <div className='pricing__content'>
          <div className='pricing__description'>Graphics</div>
          <div className='flex'>
            <div className='grow-6' style={{ width: '50%' }}>
              <div className='pricing__sub-description'>ADDING NEW BUTTON</div>
              <div className='pricing__price teal--text'>
                {' '}
                <strong>$2</strong>{' '}
              </div>
            </div>
            <div className='grow-6' style={{ width: '50%' }}>
              <div className='pricing__sub-description'>ADDING NEW FORM</div>
              <div className='pricing__price inline-flex teal--text'>
                {' '}
                <strong>$5</strong>
              </div>
              <strong> per form </strong>
              <p>( Form must fit on one screen )</p>
            </div>
          </div>
          <div className='flex'>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>NEW CONTENT</div>
                <div className=' inline-flex'>
                  {' '}
                  <strong>
                    <span className=' teal--text pricing__price'>$15 </span> per
                    screen
                  </strong>{' '}
                </div>
              </div>
              <div>
                <br />

                <div className='pricing__sub-description'>
                  GENERAL LAYOUT CHANGES
                </div>
                <div className=' inline-flex'>
                  {' '}
                  <strong>
                    <span className=' teal--text pricing__price'>$10 </span> per
                    screen
                  </strong>{' '}
                </div>
              </div>
            </div>
            <div className='grow-6' style={{ width: '50%' }}>
              <div className='pricing__sub-description'>
                CHANGE TO A COMPONENT (BUTTON, FORM, ETC.):
              </div>
              <div className='pricing__price inline-flex teal--text'>
                {' '}
                <strong>$5</strong>
              </div>
              <p>( Component must fit on one screen )</p>
            </div>
          </div>
        </div>

        <div className='pricing__content'>
          <div className='pricing__description'>Content</div>

          <div className='flex'>
            <div className='grow-12' style={{ width: '100%' }}>
              <p>
                Note: if graphical design changes are necessary, those are
                charged separately (see above)
              </p>
            </div>
          </div>
          <br />
          <div className='flex'>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>
                  CHANGES TO WORDING
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$2 </span>
                    for up to 5 edits
                  </strong>
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$5 </span>
                    for unlimited per 3 screens
                  </strong>
                </div>
              </div>

              <br />
            </div>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>
                  CHANGES TO LAYOUT
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$10 </span>
                    for up to 5 edits
                  </strong>
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$20 </span>
                    for unlimited per 3 screens
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>CHANGES TO DATA</div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$15 </span>
                    for up to 5 types
                  </strong>
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$50 </span>
                    new form
                  </strong>
                  <p> (types of data showing or accepted as input) </p>
                </div>
              </div>
            </div>

            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>COMPLEX PIVOT</div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$90 </span> per
                    10 types
                  </strong>
                  <p> (needing a fundamental change to the data)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pricing__content'>
          <div className='pricing__description'>Special Services</div>
          <p>
            It's okay if you’ve never done this before. We can connect you with
            experts for many services! If you don’t see what you need, request
            something new.
          </p>
          <br />
          <div className='flex'>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>
                  LANDING PAGE CONTENT CONSULTATION
                </div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$50 </span>
                  </strong>
                </div>
              </div>
              <div>
                <div className='pricing__sub-description'>UX CONSULTATION</div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$30 </span>
                  </strong>
                </div>
              </div>
            </div>
            <div className='grow-6' style={{ width: '50%' }}>
              <div>
                <div className='pricing__sub-description'>SEO CONSULTATION</div>
                <div className=''>
                  <strong>
                    {' '}
                    <span className='pricing__price teal--text'>$30 </span>
                  </strong>
                </div>
              </div>
              <div>
                <div>
                  <div className='pricing__sub-description'>
                    CONTENT WRITERS
                  </div>
                  <div className=''>
                    <strong>
                      {' '}
                      <span className='pricing__price teal--text'>
                        $75{' '}
                      </span>{' '}
                      per 500 words
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default serviceDetails;
