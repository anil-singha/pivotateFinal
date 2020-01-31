import React, { useState } from 'react';
import styled from 'styled-components';

import SampleForm from '../SampleForm';
import FormSuccess from '../FormSuccess';

const Button = styled.button``;

const FormToggle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const closeModal = () => setIsModalVisible(false);

  return (
    <div>
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
    </div>
  );
};

export default FormToggle;
