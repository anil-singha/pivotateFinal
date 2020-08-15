import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Form, FormCreation } from '../AppCreationForm.styles';

function FormWithAccordion({ appTitle, description, children }) {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FormCreation className={styles.root}>
      <Form>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleAccordionChange('panel1')}
          className={styles.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            classes={{
              content: styles.accordionSummary,
            }}
          >
            <Typography className={styles.heading}>{appTitle}</Typography>
            <Typography className={styles.secondaryHeading}>
              Description
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
        {children}
      </Form>
    </FormCreation>
  );
}

export default FormWithAccordion;

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
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordion: {
    backgroundColor: 'inherit',
    margin: '1rem 0',
    border: 'none',
  },
  accordionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
