import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  StepConnector,
} from '@material-ui/core';
import { graphql } from '@apollo/react-hoc';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import PropTypes from 'prop-types';

import FormAppDetails from '../../custom/FirstTimeAppCreationForm';
import UserTypeCreationForm from '../AppSpec/UserTypeCreationForm';
import InfoTypeCreationForm from '../AppSpec/InfoTypeCreationForm';
import ScreenCreationForm from '../AppSpec/ScreenCreationForm';
import SubInfoTypeCreationForm from '../../custom/SubInfoTypeCreationForm';
import { ProgressProvider } from '../../context/ProgressContext';
import App from '../AppSpec/App';
import { flattenData } from '../../flattenData';
import AppTitleAccordion from '../../custom/AppTitleAccordion';

const CustomColorLib = withStyles({
  MuStepIcon: {
    root: {
      '&$active': {
        color: '#47ACBD',
      },
      '&$completed': {
        color: '#47ACBD',
      },
    },
  },
  active: {
    '& $line': {
      color: '#47ACBD',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#47ACBD',
    },
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  customStepper: {
    marginTop: '4rem',
  },
  buttonWrapper: {
    textAlign: 'center',
    margin: '2em',
  },
  customButton: {
    width: '50%',
    borderRadius: '25px',
    backgroundColor: '#47ACBD',
    '&:hover': {
      backgroundColor: '#47ACBD',
      color: 'white',
    },
  },
  customeTheme: {
    color: '#47ACBD',
  },
  customDiv: {
    paddingBottom: '2em',
  },
}));

function getSteps() {
  return [
    'About your App!',
    'First User Type',
    'First Screen',
    'First Info Type',
    'First Sub Info Type',
  ];
}

function CreateForm({
  handleChange,
  nextStep,
  hasApp,
  keyId,
  parentId,
  app,
  selected,
  refetchQueries,
  onSelect,
  customerId,
  createApp,
}) {
  debugger

  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [appValue, updateAppValue] = useState(app);

  
  // const apps = unitData.map((el) => flattenData(el));

  // const[ first, setFirst ] = useState('');
  // const[ first, setFirst ] = useState('');
  // const[ first, setFirst ] = useState('');

  const progress = {
    first: first,
    setFirst: setFirst,
    second: second,
    setSecond: setSecond,
    third: third,
    setThird: setThird,
    fourth: {},
    fifth: {},
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const values = {
    refetchQueries,
    customerId,
    parentId
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepContent(stepIndex, action, values) {
    debugger;
    switch (stepIndex) {
      case 0:
        return <FormAppDetails handleChange={action} values={values} handleNext={handleNext} />;
      case 1:
        return (
          <>
          {app && app.map((apps) => (
            <AppTitleAccordion title={apps.value} />
          ) )}
        
            <UserTypeCreationForm handleChange={action} values={values} handleNext={handleNext}  />
          </>
        );
      case 2:
        return <ScreenCreationForm handleChange={action} values={values} handleNext={handleNext}  />;
      case 3:
        return (
          <>
            <FormAppDetails handleChange={action} values={values} />
            <UserTypeCreationForm handleChange={action} values={values} />
          </>
        );

        {
          /* </> <InfoTypeCreationForm handleChange={action} values={values}   />; */
        }
      case 4:
        return (
          <SubInfoTypeCreationForm handleChange={action} values={values} />
        );
      default:
        return 'Unknown stepIndex';
    }
  }

 

  const handleReset = () => {
    setActiveStep(0);
  };
  debugger;

  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.customStepper}
          connector={<CustomColorLib />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  classes: { root: classes.customeTheme },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div className={classes.customDiv}>
              <ProgressProvider value={progress}>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep, handleChange, values)}
                </Typography>
              </ProgressProvider>
              <div className={classes.buttonWrapper}>
                {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button> */}
                {activeStep === 0 ? (
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    className={classes.customButton}
                  >
                    NEXT`
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default compose(graphql(EXECUTE, { name: 'createApp' }))(CreateForm);

CreateForm.propTypes = {
  customerId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createApp: PropTypes.func,
};
