import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import { Button, Container, AccordionActions } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { separateOperations } from 'graphql';
import ApplicationModal from '../ApplicationModal';

const CustomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CustomAccordion = styled(Container)`
  margin-bottom: 1rem;
`;

function AppTitleAccordion({ title, description, children, userTypes }) {
  const styles = useStyles();
  const [expanded, setExpanded] = useState('panel1');
  const [openEdit, setOpenEdit] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userCount, setUserCount] = useState(2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log('stepppp', setActiveStep);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function getStepModal(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <ApplicationModal
              open={openEdit}
              title={'Hellow 1'}
              content={'This is content'}
              buttonLabel={'next'}
              handleButton={handleNext}
              // onClose={() => setOpenEdit(false)}
            />
          </>
        );
      case 1:
        return (
          <>
            <ApplicationModal
              open={openEdit}
              title={'Hellow 2'}
              content={'This is content'}
              buttonLabel={'back'}
            />
          </>
        );
    }
  }

  return (
    <>
      <CustomAccordion maxWidth='sm'>
        <Accordion
          // expanded={expanded === 'panel1'}
          // onChange={handleAccordionChange('panel1')}
          className={styles.accordion}
        >
          {/* <AccordionActions className={styles.accordionButtonsWrapper}> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            Container
            classes={{
              content: styles.accordionSummary,
            }}
          >
            <div>
              <Typography className={styles.heading}>{title}</Typography>
            </div>
            <div>
              <Typography className={styles.secondaryHeading}>
                DESCRIPTION
              </Typography>
            </div>
          </AccordionSummary>
          {/* {userCount >=2 ? (
               <Button
               className={styles.accordionButton}
               onClick={() => setOpenEdit(true)}
               variant="contained"             
               >
               Create
             </Button>

            ) : null} */}
          {/* </AccordionActions> */}

          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
        {children}
        {getStepModal(activeStep)}
        {/* <ApplicationModal
              open={openEdit}
              title={'Hellow 1'}
              content={'This is content'}
              buttonLabel={'next'}
              handleButton={handleNext}
              // onClose={() => setOpenEdit(false)}
            /> */}
      </CustomAccordion>
    </>
  );
}

export default AppTitleAccordion;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '1.2rem 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: 'Bold',
    flexBasis: '33.33%',
    flexShrink: 0,
    textAlign: 'initial',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#26ABBC',
  },
  accordion: {
    backgroundColor: '#D2ECEF',
    margin: '1rem 0',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
  },
  accordionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  accordionButtonsWrapper: {
    // justifyContent: 'space-between',
  },
  accordionButton: {
    width: '25%',
    borderRadius: '25px',
    backgroundColor: '#FCCC06',
    '&:hover': {
      backgroundColor: '#FCCC06',
    },
  },
}));
