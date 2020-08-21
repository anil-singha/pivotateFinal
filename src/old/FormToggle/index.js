import React, { useState } from 'react';
import styled from 'styled-components';

import SampleForm from '../SampleForm';
import FormSuccess from '../../components/FormSuccess';

const Wrapper = styled.div`
  margin: 1em;
`;

const Button = styled.button``;

const FormToggle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const closeModal = () => setIsModalVisible(false);

  return (
    <Wrapper>
      <Button type="button" onClick={toggleModal}>
        Show/Hide Sample Form
      </Button>
      {isModalVisible && (
        <SampleForm
          onCancel={closeModal}
          successView={
            <FormSuccess onDismiss={closeModal}/>
          }
        />
      )}
    </Wrapper>
  );
};

export default FormToggle;
