import React from 'react';
import styled from 'styled-components'; 

const Wrapper = styled.div``;

const Row = styled.p``;

const Button = styled.button``;

const FormSuccess = ({ onDismiss }) => {
  const handleDismiss = () => onDismiss();

  return (
    <Wrapper>
      <Row>
        Form submitted successfully!
      </Row>
      
      <Row>
        <Button 
          type="button"
          onClick={handleDismiss}
        >
          Ok
        </Button>
      </Row>
    </Wrapper>
  )
};

export default FormSuccess;
