import React, { useState } from 'react';
import clsx from 'clsx';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';
import FormAppDetails from '../AppSpec/AppCreationForm/FormDetails/FormAppDetails';

import FormUserType from '../AppSpec/AppCreationForm/FormUserType/FormUserType';
import FormJobSeeker from '../AppSpec/AppCreationForm/FormJobSeeker/FormJobSeeker';
import FormProfileDetails from '../AppSpec/AppCreationForm/FormProfileDetails/FormProfileDetails';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(33,137,242) 0%,rgb(232,223,51) 50%,rgb(245,245,240) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(33,137,242) 0%,rgb(232,223,51) 50%,rgb(245,245,240) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(33,137,242) 0%, rgb(232,223,51) 50%, rgb(245,245,240) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(33,137,242) 0%, rgb(232,223,51) 50%, rgb(245,245,240) 100%)',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    alignSelf: 'center',
    width: '60%',
  },
  button: {
    position: 'relative',
    left: '60%',
  },
}));

function getSteps() {
  return [
    'Tell us more about your App?',
    'What is the user type?',
    'Job Seeker title',
    'Profile details',
    'Type info',
    'Review your changes'
  ];
}

function getStepContent(stepIndex, action, values) {
  switch (stepIndex) {
    case 0:
      return <FormAppDetails handleChange={action} values={values} />;
    case 1:
      return <FormUserType handleChange={action} values={values} />;
    case 2:
      return <FormJobSeeker handleChange={action} values={values} />;
    case 3:
      return <FormProfileDetails handleChange={action} values={values} />;
    case 4:
      return <FormAppDetails handleChange={action} values={values} />;
    case 5:
      return <FormAppDetails handleChange={action} values={values} />;
    case 6:
      return <FormAppDetails handleChange={action} values={values} />;

    default:
      return 'Unknown stepIndex';
  }
}

const CreateForm = ({
  handleChange,
  nextStep,

  hasApp,
  keyId,
  parentId,
  app,
  selected,
  refetchQueries,
  onSelect,
}) => {
  const styles = useStyles();
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

  console.log(values);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={styles.root}>
      <Stepper
        className={styles.stepper}
        activeStep={activeStep}
        alternativeLabel
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <>
            <FormAppDetails />
            <Button className={styles.button} onClick={handleReset}>
              Reset
            </Button>
          </>
        ) : (
          <>
            <Typography component='span' className={styles.instructions}>
              {getStepContent(activeStep, handleChange, values)}
            </Typography>
            <div className={styles.button}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={styles.backButton}
              >
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
