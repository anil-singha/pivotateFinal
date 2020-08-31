// import React, { useState } from 'react';


// const ColorlibConnector = withStyles({
//   alternativeLabel: {
//     top: 22,
//   },
//   active: {
//     '& $line': {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(33,137,242) 0%,rgb(232,223,51) 50%,rgb(245,245,240) 100%)',
//     },
//   },
//   completed: {
//     '& $line': {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(33,137,242) 0%,rgb(232,223,51) 50%,rgb(245,245,240) 100%)',
//     },
//   },
//   line: {
//     height: 3,
//     border: 0,
//     backgroundColor: '#eaeaf0',
//     borderRadius: 1,
//   },
// })(StepConnector);

// const useColorlibStepIconStyles = makeStyles({
//   root: {
//     backgroundColor: '#ccc',
//     zIndex: 1,
//     color: '#fff',
//     width: 50,
//     height: 50,
//     display: 'flex',
//     borderRadius: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   active: {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(33,137,242) 0%, rgb(232,223,51) 50%, rgb(245,245,240) 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   },
//   completed: {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(33,137,242) 0%, rgb(232,223,51) 50%, rgb(245,245,240) 100%)',
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     justifyContent: 'center',
//     display: 'flex',
//     flexWrap: 'wrap',
//     flexDirection: 'column',
//     position: 'relative',
//     marginBottom: theme.spacing(1),
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   stepper: {
//     alignSelf: 'center',
//     width: '60%',
//   },
//   button: {
//     textAlign: 'center',
  
   
//   },
// }));
// const CustomButton = styled(Button)`
//   && {
//     border-radius: 25px;
//     background-color: black;
//     color: white;
//     margin-top: 1rem;
//     width: 100%;
//     &:hover: {
//       background-color: black;
//       color: white;
//     }
//     .span {
//       color: white;
//     }
//   }
// `;

// function getSteps() {
//   return [
//     'Tell us more about your App?',
//     'What is the user type?',
//     'Job Seeker title',
//     'Profile details',
//     'Type info',
//     'Review your changes'
//   ];
// }

// function getStepContent(stepIndex, action, values) {
//   switch (stepIndex) {
//     case 0:
//       return <FormAppDetails handleChange={action} values={values} />;
//     case 1:
//       return <FormUserType handleChange={action} values={values} />;
//     case 2:
//       return <FormJobSeeker handleChange={action} values={values} />;
//     case 3:
//       return <FormProfileDetails handleChange={action} values={values} />;
//     case 4:
//       return <FormAppDetails handleChange={action} values={values} />;
//     case 5:
//       return <FormAppDetails handleChange={action} values={values} />;
//     case 6:
//       return <FormAppDetails handleChange={action} values={values} />;

//     default:
//       return 'Unknown stepIndex';
//   }
// }

// const CreateForm = ({
//   handleChange,
//   nextStep,

//   hasApp,
//   keyId,
//   parentId,
//   app,
//   selected,
//   refetchQueries,
//   onSelect,
// }) => {
//   const styles = useStyles();
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = getSteps();

//   const values = {
//     handleChange,
//     nextStep,
//     hasApp,
//     keyId,
//     parentId,
//     app,
//     selected,
//     refetchQueries,
//     onSelect,
//   };

//   console.log(values);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={styles.root}>
//       <Stepper
//         className={styles.stepper}
//         activeStep={activeStep}
//         alternativeLabel
//         connector={<ColorlibConnector />}
//       >
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <>
//             <FormAppDetails />
//             <Button className={styles.button} onClick={handleReset}>
//               Reset
//             </Button>
//           </>
//         ) : (
//           <>
//             <Typography component='span' className={styles.instructions}>
//               {getStepContent(activeStep, handleChange, values)}
//             </Typography>
//             <div className={styles.button}>
//               {/* <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className={styles.backButton}
//               >
//                 Back
//               </Button> */}
//               <CustomButton onClick={handleNext} >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </CustomButton>
//             </div>
//           </>
//         )}
//       </div>
 //   );
// };

// export default CreateForm;

import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Container , StepConnector} from '@material-ui/core';
import { graphql } from '@apollo/react-hoc';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import PropTypes from 'prop-types';
import { CREATE_APP_FOR_APP_SPEC_ACTION_ID } from '../../config';

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
  root : {
    width: '100%',
  },
  customStepper: {
    marginTop: '4rem',
  },
  buttonWrapper: {
    textAlign: 'center',
    margin: '2em'
  },
  customButton: {
    width: '50%',
    borderRadius: '25px',
    backgroundColor: '#47ACBD',
    "&:hover": {
      backgroundColor: '#47ACBD',
      color: 'white',
    }
  },
  customeTheme: {
    color: '#47ACBD',
  }
 
 

}));

function getSteps() {
  return [
    'About your App!',
    'First User Type',
    'First Screen',
    'First Info Type',
    'First Sub Info Type'



  ];
}


function getStepContent(stepIndex, action, values, customerId) {
  console.log('form ceation ', customerId);

  switch (stepIndex) {
    case 0:
      return <FormAppDetails handleChange={action} values={values} customerId={customerId} />;
    case 1:
      return <UserTypeCreationForm  handleChange={action} values={values} customerId={customerId}/>;
    case 2:
      return <ScreenCreationForm handleChange={action} values={values} />;
      case 3:
      return <InfoTypeCreationForm handleChange={action} values={values} />;
      case 4:
      return <SubInfoTypeCreationForm handleChange={action} values={values} />;
    default:
      return 'Unknown stepIndex';
  }
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





}){
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
  console.log('insideee values', values);

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
    <div className={classes.root}>
      <Container maxWidth="sm" >
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
              classes: { root: classes.customeTheme }
            }}
          >
            

            
            {label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleChange,customerId,parentId,values) }</Typography>
            <div className={classes.buttonWrapper}>
           
            
              <Button 
              variant="contained" 
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

export default compose(graphql(EXECUTE, { name: 'createApp'}))(CreateForm);

CreateForm.propTypes = {
  customerId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createApp: PropTypes.func,
};
