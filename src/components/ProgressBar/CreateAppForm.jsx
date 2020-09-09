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
  }
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
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const values = {
    handleChange,
    nextStep,
    hasApp,
    keyId,
    parentId,
    app,
    selected,
    refetchQueries,
    onSelect,
  };

  function getStepContent(stepIndex, action, values) {  
    switch (stepIndex) {
      case 0:
        return <FormAppDetails handleChange={action} values={values}  />;
      case 1:
        return <UserTypeCreationForm handleChange={action} values={values}   />;
      case 2:
        return <ScreenCreationForm handleChange={action} values={values}  />;
      case 3:
        return <> 
        <FormAppDetails handleChange={action} values={values}  />
        <UserTypeCreationForm handleChange={action} values={values}   />
        </>

        {/* </> <InfoTypeCreationForm handleChange={action} values={values}   />; */}
      case 4:
        return <SubInfoTypeCreationForm handleChange={action} values={values} />;
      default:
        return 'Unknown stepIndex';
    }
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
            <div className={classes.customDiv} >
              <Typography className={classes.instructions}>
                {getStepContent(activeStep, handleChange,values)}
              </Typography>
              <div className={classes.buttonWrapper}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
                <Button
                  variant='contained'
                  onClick={handleNext}
                  className={classes.customButton}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
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
