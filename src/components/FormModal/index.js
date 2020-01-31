import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import SampleForm from '../SampleForm';
import FormSuccess from '../FormSuccess';

const Button = styled.button``;

const modalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement(document.getElementById('root'));

const FormModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  return (
    <div>
      <Button type="button" onClick={openModal}>Open Sample Form Modal</Button>
      <Modal
        isOpen={isModalVisible}
        onRequestClose={closeModal}
        contentLabel="Sample Form"
        style={modalStyle}
      >
        <SampleForm
          onCancel={closeModal}
          successView={
            <FormSuccess onDismiss={closeModal}/>
          }
        />
      </Modal>
    </div>
  );
};

export default FormModal;
