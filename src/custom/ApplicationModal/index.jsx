import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

function ApplicationModal({ title, content, buttonLabel, open, handleButton }) {
  return (
    <Dialog
      open={open}
      // onClose={handleClose}
      maxWidth='sm'
      disableEscapeKeyDown
      disableBackdropClick={true}
      fullWidth
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle> {title} </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleButton}> {buttonLabel} </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ApplicationModal;
